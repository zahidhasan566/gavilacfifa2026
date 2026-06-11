<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class LiveScoreProxyController extends Controller
{
    public function today()
    {
        $token    = config('services.sportmonks.token');
        $baseUrl  = config('services.sportmonks.base_url');
        $seasonId = config('services.sportmonks.season_id');

        $response = Http::timeout(20)->get("{$baseUrl}/fixtures/between/2026-06-11/2026-07-19", [
            'api_token' => $token,
            'include'   => 'participants;scores;state',
            'per_page'  => 100,
        ]);

        if (!$response->successful()) {
            return response()->json(['status' => 'error', 'message' => $response->body(), 'data' => []], 200);
        }

        $fixtures = collect($response->json()['data'] ?? [])
            ->map(function ($f) {
                $participants = $f['participants'] ?? [];
                $home = collect($participants)->firstWhere('meta.location', 'home');
                $away = collect($participants)->firstWhere('meta.location', 'away');

                $scores    = $f['scores'] ?? [];
                $homeGoals = $this->getScore($scores, 'home', 'CURRENT');
                $awayGoals = $this->getScore($scores, 'away', 'CURRENT');

                $state    = $f['state']['short_name'] ?? 'NS';
                $startUtc = $f['starting_at'] ?? null;

                $kickoffBD = $startUtc
                    ? \Carbon\Carbon::parse($startUtc, 'UTC')->setTimezone('Asia/Dhaka')->format('h:i A')
                    : null;
                $dateBD = $startUtc
                    ? \Carbon\Carbon::parse($startUtc, 'UTC')->setTimezone('Asia/Dhaka')->format('d M Y')
                    : null;

                return [
                    'id'         => $f['id'],
                    'home'       => $home['name'] ?? 'TBD',
                    'away'       => $away['name'] ?? 'TBD',
                    'home_flag'  => $home['image_path'] ?? null,
                    'away_flag'  => $away['image_path'] ?? null,
                    'home_score' => $homeGoals,
                    'away_score' => $awayGoals,
                    'status'     => $state,
                    'kickoff_bd' => $kickoffBD,
                    'date_bd'    => $dateBD,
                ];
            })
            ->values();

        return response()->json(['status' => 'success', 'data' => $fixtures]);
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
}
