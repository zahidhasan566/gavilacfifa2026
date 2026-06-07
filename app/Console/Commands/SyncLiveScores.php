<?php

namespace App\Console\Commands;

use App\Models\MatchGame;
use App\Models\Team;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class SyncLiveScores extends Command
{
    protected $signature   = 'scores:sync {--dry-run : Show what would update without saving}';
    protected $description = 'Sync live match scores from Sportmonks API';

    // Sportmonks state short_name → our status
    private $statusMap = [
        'NS'     => 'upcoming',
        'TBA'    => 'upcoming',
        'POSTP'  => 'upcoming',
        'SUSP'   => 'upcoming',
        'CANC'   => 'upcoming',
        'ABAN'   => 'upcoming',
        '1H'     => 'live',
        'HT'     => 'live',
        '2H'     => 'live',
        'ET'     => 'live',
        'BREAK'  => 'live',
        'PEN'    => 'live',
        'INT'    => 'live',
        'LIVE'   => 'live',
        'FT'     => 'completed',
        'AET'    => 'completed',
        'FT_PEN' => 'completed',
        'WO'     => 'completed',
        'AU'     => 'completed',
    ];

    public function handle(): int
    {
        $token   = config('services.sportmonks.token');
        $baseUrl = config('services.sportmonks.base_url');
        $dryRun  = $this->option('dry-run');

        if (empty($token)) {
            $this->error('SPORTMONKS_API_TOKEN is not set in .env');
            return 1;
        }
        $this->info("Syncing accessible leagues" . ($dryRun ? ' [DRY RUN]' : ''));

        $fixtures = $this->fetchAllFixtures($baseUrl, $token);

        if ($fixtures === null) {
            return 1;
        }

        $this->info("Fetched " . count($fixtures) . " fixtures from Sportmonks.");

        $updated = $created = $skipped = 0;

        foreach ($fixtures as $fixture) {
            $result = $this->processFixture($fixture, $dryRun);
            if ($result === 'updated') $updated++;
            elseif ($result === 'created') $created++;
            else $skipped++;
        }

        $this->info("Done. Updated: {$updated} | Created: {$created} | Skipped: {$skipped}");
        return 0;
    }

    private function fetchAllFixtures(string $baseUrl, string $token): ?array
    {
        $cutoff   = date('Y-m-d', strtotime('-6 months'));
        $fixtures = [];
        $page     = 1;

        do {
            $response = Http::timeout(20)
                ->get("{$baseUrl}/fixtures", [
                    'api_token' => $token,
                    'include'   => 'participants;scores;state;venue;round',
                    'page'      => $page,
                ]);

            if (!$response->successful()) {
                $this->error("Sportmonks API error {$response->status()}: " . $response->body());
                return null;
            }

            $body    = $response->json();
            $batch   = $body['data'] ?? [];
            $hasMore = $body['pagination']['has_more'] ?? false;

            foreach ($batch as $f) {
                $date = substr($f['starting_at'] ?? '0000-00-00', 0, 10);
                if ($date >= $cutoff) {
                    $fixtures[] = $f;
                }
            }

            $page++;
        } while ($hasMore);

        return $fixtures;
    }

    private function processFixture(array $fixture, bool $dryRun): string
    {
        $externalId = $fixture['id'];

        // ── Teams from participants ──────────────────────────────────
        $participants = $fixture['participants'] ?? [];
        $homeData     = collect($participants)->firstWhere('meta.location', 'home');
        $awayData     = collect($participants)->firstWhere('meta.location', 'away');

        $homeName = $homeData['name'] ?? null;
        $awayName = $awayData['name'] ?? null;

        // ── State / Status ───────────────────────────────────────────
        $stateShort = $fixture['state']['short_name'] ?? ($fixture['state']['state'] ?? 'NS');
        $ourStatus  = $this->statusMap[strtoupper($stateShort)] ?? 'upcoming';

        // ── Scores ───────────────────────────────────────────────────
        $scores       = $fixture['scores'] ?? [];
        $team1Score   = $this->getScore($scores, 'home', 'CURRENT');
        $team2Score   = $this->getScore($scores, 'away', 'CURRENT');
        $team1Half1   = $this->getScore($scores, 'home', '1ST_HALF');
        $team2Half1   = $this->getScore($scores, 'away', '1ST_HALF');

        // ── Date / Time / Venue ──────────────────────────────────────
        $startingAt = $fixture['starting_at'] ?? null;          // "2026-06-14 18:00:00" UTC
        $matchDate  = $startingAt ? substr($startingAt, 0, 10) : null;
        $matchTime  = $startingAt ? substr($startingAt, 11, 5) : null;
        $venue      = $fixture['venue']['name'] ?? null;

        // ── Round / Group ────────────────────────────────────────────
        $roundName  = $fixture['round']['name'] ?? null;
        $roundNum   = $fixture['round']['id']   ?? null;

        // ── Try find by external_id ──────────────────────────────────
        $match = MatchGame::where('external_id', $externalId)->first();

        if ($match) {
            if ($dryRun) {
                $this->line("  [UPDATE] #{$externalId} {$homeName} vs {$awayName} → {$ourStatus} {$team1Score}-{$team2Score}");
                return 'updated';
            }
            $match->update([
                'status'      => $ourStatus,
                'team1_score' => $team1Score,
                'team2_score' => $team2Score,
                'team1_half1' => $team1Half1,
                'team2_half1' => $team2Half1,
                'match_date'  => $matchDate,
                'match_time'  => $matchTime,
                'venue'       => $venue ?? $match->venue,
            ]);
            return 'updated';
        }

        // ── Try match by team names + date ───────────────────────────
        $team1 = $this->findTeam($homeName);
        $team2 = $this->findTeam($awayName);

        if (!$team1 || !$team2) {
            $this->warn("  [SKIP] No team match: {$homeName} vs {$awayName}");
            return 'skipped';
        }

        $match = MatchGame::where('team1_id', $team1->id)
            ->where('team2_id', $team2->id)
            ->whereDate('match_date', $matchDate)
            ->first()
            ?? MatchGame::where('team1_id', $team2->id)
                ->where('team2_id', $team1->id)
                ->whereDate('match_date', $matchDate)
                ->first();

        if ($match) {
            if ($dryRun) {
                $this->line("  [UPDATE by name] #{$externalId} {$homeName} vs {$awayName} → {$ourStatus}");
                return 'updated';
            }
            $match->update([
                'external_id' => $externalId,
                'status'      => $ourStatus,
                'team1_score' => $team1Score,
                'team2_score' => $team2Score,
                'team1_half1' => $team1Half1,
                'team2_half1' => $team2Half1,
                'match_time'  => $matchTime,
                'venue'       => $venue ?? $match->venue,
            ]);
            return 'updated';
        }

        // ── Create new match ─────────────────────────────────────────
        if ($dryRun) {
            $this->line("  [CREATE] #{$externalId} {$homeName} vs {$awayName} on {$matchDate}");
            return 'created';
        }

        MatchGame::create([
            'external_id'  => $externalId,
            'team1_id'     => $team1->id,
            'team2_id'     => $team2->id,
            'match_date'   => $matchDate,
            'match_time'   => $matchTime,
            'venue'        => $venue,
            'status'       => $ourStatus,
            'team1_score'  => $team1Score,
            'team2_score'  => $team2Score,
            'team1_half1'  => $team1Half1,
            'team2_half1'  => $team2Half1,
            'round_number' => $roundNum,
            'group_name'   => $roundName,
        ]);

        return 'created';
    }

    private function getScore(array $scores, string $location, string $description): ?int
    {
        foreach ($scores as $s) {
            if (
                strtoupper($s['description'] ?? '') === $description &&
                strtolower($s['score']['participant'] ?? '') === $location
            ) {
                return $s['score']['goals'] ?? null;
            }
        }
        return null;
    }

    private function findTeam(string $name): ?Team
    {
        if (!$name) return null;

        $team = Team::whereRaw('LOWER(name) = ?', [strtolower($name)])->first();
        if ($team) return $team;

        $team = Team::whereRaw('LOWER(name) LIKE ?', ['%' . strtolower($name) . '%'])->first();
        if ($team) return $team;

        $team = Team::whereRaw('? LIKE CONCAT("%", LOWER(name), "%")', [strtolower($name)])->first();
        if ($team) return $team;

        return null;
    }
}
