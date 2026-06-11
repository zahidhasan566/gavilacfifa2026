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

    // Sportmonks team name → our DB name
    private $teamAliases = [
        'united states'           => 'USA',
        'usa'                     => 'USA',
        'korea republic'          => 'Korea Rep.',
        'republic of korea'       => 'Korea Rep.',
        'czech republic'          => 'Czechia',
        'czechia'                 => 'Czechia',
        'bosnia and herzegovina'  => 'Bosnia & Hrz',
        'bosnia & herzegovina'    => 'Bosnia & Hrz',
        "côte d'ivoire"           => 'Ivory Coast',
        "cote d'ivoire"           => 'Ivory Coast',
        'ivory coast'             => 'Ivory Coast',
        'congo dr'                => 'DR Congo',
        'dr congo'                => 'DR Congo',
        'democratic republic of congo' => 'DR Congo',
        'cape verde islands'      => 'Cape Verde',
        'cape verde'              => 'Cape Verde',
        'curacao'                 => 'Curaçao',
        'curaçao'                 => 'Curaçao',
        'turkey'                  => 'Türkiye',
        'türkiye'                 => 'Türkiye',
        'great britain'           => 'England',
    ];

    // Sportmonks state developer_name → our status
    private $statusMap = [
        'NS'                  => 'upcoming',
        'TBA'                 => 'upcoming',
        'POSTP'               => 'upcoming',
        'SUSP'                => 'upcoming',
        'CANC'                => 'upcoming',
        'ABAN'                => 'upcoming',
        'INPLAY_1ST_HALF'     => 'live',
        'INPLAY_2ND_HALF'     => 'live',
        'HT'                  => 'live',
        'INPLAY_ET'           => 'live',
        'INPLAY_ET_2ND_HALF'  => 'live',
        'INPLAY_PENALTIES'    => 'live',
        'BREAK'               => 'live',
        'INT'                 => 'live',
        'LIVE'                => 'live',
        'FT'                  => 'completed',
        'AET'                 => 'completed',
        'FT_PEN'              => 'completed',
        'WO'                  => 'completed',
        'AU'                  => 'completed',
    ];

    public function handle(): int
    {
        $token   = config('services.sportmonks.token');
        $baseUrl = config('services.sportmonks.base_url');
        $dryRun  = $this->option('dry-run');

        if (empty($token)) {
            $this->error('SPORTMONKS_TOKEN is not set in .env');
            return 1;
        }

        $this->info("Syncing World Cup fixtures" . ($dryRun ? ' [DRY RUN]' : ''));

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
        $seasonId = config('services.sportmonks.season_id');
        $leagueId = config('services.sportmonks.league_id');

        // Use a rolling window: yesterday through end of tournament
        $startDate = date('Y-m-d', strtotime('-1 day'));
        $endDate   = '2026-07-19';
        $endpoint  = "{$baseUrl}/fixtures/between/{$startDate}/{$endDate}";

        $fixtures = [];
        $page     = 1;

        do {
            $params = [
                'api_token' => $token,
                'include'   => 'participants;scores;state;venue;round',
                'page'      => $page,
                'per_page'  => 50,
            ];

            $response = Http::timeout(20)->get($endpoint, $params);

            if (!$response->successful()) {
                $this->error("Sportmonks API error {$response->status()}: " . $response->body());
                return null;
            }

            $body    = $response->json();
            $batch   = $body['data'] ?? [];
            $hasMore = $body['pagination']['has_more'] ?? false;

            foreach ($batch as $f) {
                // If season/league IDs are configured, filter to only World Cup fixtures
                if (!empty($seasonId) || !empty($leagueId)) {
                    if ((string)($f['season_id'] ?? '') !== (string)$seasonId
                        && (string)($f['league_id'] ?? '') !== (string)$leagueId) {
                        continue;
                    }
                }
                $fixtures[] = $f;
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
        $stateKey  = $fixture['state']['developer_name'] ?? ($fixture['state']['state'] ?? 'NS');
        $ourStatus = $this->statusMap[strtoupper($stateKey)] ?? 'upcoming';

        // ── Scores ───────────────────────────────────────────────────
        $scores       = $fixture['scores'] ?? [];
        $team1Score   = $this->getScore($scores, 'home', 'CURRENT');
        $team2Score   = $this->getScore($scores, 'away', 'CURRENT');
        $team1Half1   = $this->getScore($scores, 'home', '1ST_HALF');
        $team2Half1   = $this->getScore($scores, 'away', '1ST_HALF');

        // ── Date / Time / Venue ──────────────────────────────────────
        $startingAt = $fixture['starting_at'] ?? null;
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

        $dateFrom = date('Y-m-d', strtotime($matchDate . ' -1 day'));
        $dateTo   = date('Y-m-d', strtotime($matchDate . ' +1 day'));

        $match = MatchGame::where('team1_id', $team1->id)
            ->where('team2_id', $team2->id)
            ->whereBetween('match_date', [$dateFrom, $dateTo])
            ->first()
            ?? MatchGame::where('team1_id', $team2->id)
                ->where('team2_id', $team1->id)
                ->whereBetween('match_date', [$dateFrom, $dateTo])
                ->first();

        if (!$match) {
            $match = MatchGame::where('team1_id', $team1->id)
                ->where('team2_id', $team2->id)
                ->whereNull('external_id')
                ->first()
                ?? MatchGame::where('team1_id', $team2->id)
                    ->where('team2_id', $team1->id)
                    ->whereNull('external_id')
                    ->first();
        }

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
                'match_date'  => $matchDate,
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

        $lower = mb_strtolower(trim($name), 'UTF-8');

        $resolved = $this->teamAliases[$lower] ?? null;
        if ($resolved) {
            $team = Team::whereRaw('LOWER(name) = ?', [mb_strtolower($resolved, 'UTF-8')])->first();
            if ($team) return $team;
        }

        $team = Team::whereRaw('LOWER(name) = ?', [$lower])->first();
        if ($team) return $team;

        $team = Team::whereRaw('? LIKE CONCAT("%", LOWER(name), "%")', [$lower])->first();
        if ($team) return $team;

        $team = Team::whereRaw('LOWER(name) LIKE ?', ['%' . $lower . '%'])->first();
        if ($team) return $team;

        return null;
    }
}
