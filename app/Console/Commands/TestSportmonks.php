<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class TestSportmonks extends Command
{
    protected $signature = 'sportmonks:test
                            {--leagues : List all accessible leagues}
                            {--seasons= : List seasons for a league ID}
                            {--fixtures= : Show first 5 fixtures for a season ID}
                            {--live : Show currently live fixtures}';

    protected $description = 'Test SportMonks API connection and discover league/season IDs';

    public function handle(): int
    {
        $token   = config('services.sportmonks.token');
        $baseUrl = config('services.sportmonks.base_url');

        if (empty($token)) {
            $this->error('SPORTMONKS_API_TOKEN is not set in .env');
            return 1;
        }

        $this->info("Connecting to SportMonks API...");

        // ── Test basic connectivity ──────────────────────────────────
        if (!$this->option('leagues') && !$this->option('seasons') && !$this->option('fixtures') && !$this->option('live')) {
            $res = Http::timeout(10)->get("{$baseUrl}/leagues", ['api_token' => $token, 'per_page' => 1]);
            if ($res->successful()) {
                $this->info("✓ API token is VALID. Connection successful.");
                $this->line("  Use --leagues to browse leagues, --live to check live matches.");
            } else {
                $this->error("✗ API error {$res->status()}: " . $res->body());
                return 1;
            }
            return 0;
        }

        // ── List leagues ─────────────────────────────────────────────
        if ($this->option('leagues')) {
            $this->info("Fetching accessible leagues...");
            $res = Http::timeout(15)->get("{$baseUrl}/leagues", ['api_token' => $token, 'per_page' => 50]);
            if (!$res->successful()) {
                $this->error("Error: " . $res->body());
                return 1;
            }
            $leagues = $res->json()['data'] ?? [];
            if (empty($leagues)) {
                $this->warn("No leagues found. Check your subscription.");
                return 0;
            }
            $rows = [];
            foreach ($leagues as $l) {
                $rows[] = [$l['id'], $l['name'], $l['country_id'] ?? '-'];
            }
            $this->table(['ID', 'Name', 'Country ID'], $rows);
            $this->line("\nTip: Find \"FIFA World Cup\" → copy its ID → run: php artisan sportmonks:test --seasons=LEAGUE_ID");
            return 0;
        }

        // ── List seasons for a league ────────────────────────────────
        if ($leagueId = $this->option('seasons')) {
            $this->info("Fetching seasons for league #{$leagueId}...");
            $res = Http::timeout(15)->get("{$baseUrl}/seasons/leagues/{$leagueId}", [
                'api_token' => $token,
                'per_page'  => 25,
            ]);
            if (!$res->successful()) {
                $this->error("Error: " . $res->body());
                return 1;
            }
            $seasons = $res->json()['data'] ?? [];
            if (empty($seasons)) {
                $this->warn("No seasons found for league #{$leagueId}.");
                return 0;
            }
            $rows = [];
            foreach ($seasons as $s) {
                $rows[] = [$s['id'], $s['name'], $s['starting_at'] ?? '-', $s['ending_at'] ?? '-'];
            }
            $this->table(['Season ID', 'Name', 'Start', 'End'], $rows);
            $this->line("\nTip: Find the 2026 season → copy its ID → add to .env as SPORTMONKS_SEASON_ID");
            return 0;
        }

        // ── Sample fixtures for a season ─────────────────────────────
        if ($seasonId = $this->option('fixtures')) {
            $this->info("Fetching fixtures for season #{$seasonId}...");
            $res = Http::timeout(15)->get("{$baseUrl}/fixtures/seasons/{$seasonId}", [
                'api_token' => $token,
                'include'   => 'participants;state',
                'per_page'  => 5,
                'page'      => 1,
            ]);
            if (!$res->successful()) {
                $this->error("Error: " . $res->body());
                return 1;
            }
            $fixtures = $res->json()['data'] ?? [];
            if (empty($fixtures)) {
                $this->warn("No fixtures found.");
                return 0;
            }
            foreach ($fixtures as $f) {
                $participants = $f['participants'] ?? [];
                $home = collect($participants)->firstWhere('meta.location', 'home');
                $away = collect($participants)->firstWhere('meta.location', 'away');
                $state = $f['state']['short_name'] ?? '?';
                $this->line("  [{$f['id']}] " . ($home['name'] ?? '?') . " vs " . ($away['name'] ?? '?') . " | {$f['starting_at']} | {$state}");
            }
            return 0;
        }

        // ── Live fixtures ─────────────────────────────────────────────
        if ($this->option('live')) {
            $seasonId = config('services.sportmonks.season_id');
            $url = $seasonId
                ? "{$baseUrl}/fixtures/seasons/{$seasonId}"
                : "{$baseUrl}/livescores/now";
            $res = Http::timeout(15)->get($url, [
                'api_token' => $token,
                'include'   => 'participants;scores;state',
            ]);
            if (!$res->successful()) {
                $this->error("Error: " . $res->body());
                return 1;
            }
            $fixtures = $res->json()['data'] ?? [];
            if (empty($fixtures)) {
                $this->info("No live matches right now.");
                return 0;
            }
            $this->info(count($fixtures) . " live fixture(s):");
            foreach ($fixtures as $f) {
                $participants = $f['participants'] ?? [];
                $home = collect($participants)->firstWhere('meta.location', 'home');
                $away = collect($participants)->firstWhere('meta.location', 'away');
                $state = $f['state']['short_name'] ?? '?';
                $this->line("  [{$f['id']}] " . ($home['name'] ?? '?') . " vs " . ($away['name'] ?? '?') . " | {$state}");
            }
            return 0;
        }

        return 0;
    }
}
