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
            'include'   => 'participants;scores;state;periods',
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

                $stateKey   = $f['state']['developer_name'] ?? ($f['state']['state'] ?? 'NS');
                $liveStates = ['INPLAY_1ST_HALF','INPLAY_2ND_HALF','HT','INPLAY_ET','INPLAY_ET_2ND_HALF','INPLAY_PENALTIES','BREAK','INT','LIVE'];
                $doneStates = ['FT','AET','FT_PEN','WO','AU'];
                if (in_array(strtoupper($stateKey), $liveStates)) $status = 'live';
                elseif (in_array(strtoupper($stateKey), $doneStates)) $status = 'completed';
                else $status = 'NS';

                // Elapsed minutes from the currently ticking period
                $tickingPeriod = collect($f['periods'] ?? [])->firstWhere('ticking', true);
                $minute = $tickingPeriod['minutes'] ?? null;

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
                    'status'     => $status,
                    'minute'     => $minute,
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
