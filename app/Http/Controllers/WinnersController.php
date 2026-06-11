<?php

namespace App\Http\Controllers;

use App\Models\MatchGame;
use App\Models\Prediction;
use App\Models\RaffleDraw;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class WinnersController extends Controller
{
    public function leaderboard(Request $request)
    {
        $winners = User::select('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->selectRaw('SUM(predictions.points_earned) as total_points')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->orderByDesc('total_points')
            ->limit(10)
            ->get()
            ->map(function ($u, $index) {
                return [
                    'rank'                => $index + 1,
                    'id'                  => $u->id,
                    'name'                => $u->name,
                    'unique_code'         => $u->unique_code,
                    'total_points'        => (int) $u->total_points,
                    'profile_picture_url' => $u->profile_picture_url,
                ];
            });

        return response()->json(['status' => 'success', 'data' => $winners]);
    }

    public function todayWinner()
    {
        $today = now()->toDateString();

        $winner = User::select('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->selectRaw('SUM(predictions.points_earned) as total_points')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->whereDate('predictions.created_at', $today)
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->orderByDesc('total_points')
            ->first();

        if (!$winner) {
            return response()->json(['status' => 'success', 'data' => null]);
        }

        return response()->json([
            'status' => 'success',
            'data'   => [
                'id'                  => $winner->id,
                'name'                => $winner->name,
                'unique_code'         => $winner->unique_code,
                'total_points'        => (int) $winner->total_points,
                'profile_picture_url' => $winner->profile_picture_url,
                'date'                => $today,
            ],
        ]);
    }

    public function raffleWinners()
    {
        $draws = RaffleDraw::with(['user', 'match.team1', 'match.team2'])
            ->where('prize_points', '>', 0)
            ->orderBy('match_id')
            ->orderByDesc('draw_date')
            ->get();

        $carousel = $draws->map(function ($d) {
            $user  = $d->user;
            $match = $d->match;

            return [
                'id'                  => $d->id,
                'name'                => $user ? $user->name : null,
                'unique_code'         => $user ? $user->unique_code : null,
                'prize_points'        => $d->prize_points,
                'draw_date'           => $d->draw_date ? $d->draw_date->format('d/m/Y') : null,
                'notes'               => $d->notes,
                'profile_picture_url' => $user ? $user->profile_picture_url : asset('images/default-avatar.png'),
                'match_label'         => $match
                    ? (($match->team1 ? $match->team1->name : '?') . ' vs ' . ($match->team2 ? $match->team2->name : '?'))
                    : 'General Draw',
                'match_date'          => $match && $match->match_date ? $match->match_date->format('d/m/Y') : null,
            ];
        })->values();

        $byMatch = $draws->groupBy(function ($d) {
            return $d->match_id ?? 'general';
        })->map(function ($group, $key) {
            $first = $group->first();
            $match = $first->match;

            return [
                'match_id'    => $key === 'general' ? null : (int) $key,
                'match_label' => $match
                    ? (($match->team1 ? $match->team1->name : '?') . ' vs ' . ($match->team2 ? $match->team2->name : '?'))
                    : 'General Draw',
                'match_date'  => $match && $match->match_date ? $match->match_date->format('d/m/Y') : null,
                'winners'     => $group->map(function ($d) {
                    $user = $d->user;
                    return [
                        'id'                  => $d->id,
                        'name'                => $user ? $user->name : null,
                        'unique_code'         => $user ? $user->unique_code : null,
                        'prize_points'        => $d->prize_points,
                        'draw_date'           => $d->draw_date ? $d->draw_date->format('d/m/Y') : null,
                        'notes'               => $d->notes,
                        'profile_picture_url' => $user ? $user->profile_picture_url : asset('images/default-avatar.png'),
                    ];
                })->values(),
            ];
        })->values();

        return response()->json([
            'status' => 'success',
            'data'   => ['carousel' => $carousel, 'by_match' => $byMatch],
        ]);
    }

    public function recentMatchesWinners()
    {
        $matches = MatchGame::with(['team1', 'team2'])
            ->where('status', 'completed')
            ->where('updated_at', '>=', now()->subHours(24))
            ->orderByDesc('updated_at')
            ->get();

        $result = $matches->map(function ($match) {
            $winners = User::select('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
                ->selectRaw('SUM(predictions.points_earned) as match_points')
                ->join('predictions', 'users.id', '=', 'predictions.user_id')
                ->where('predictions.match_id', $match->id)
                ->where('users.role', 'user')
                ->where('users.status', 1)
                ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
                ->orderByDesc('match_points')
                ->limit(10)
                ->get()
                ->map(function ($u, $i) {
                    return [
                        'rank'                => $i + 1,
                        'id'                  => $u->id,
                        'name'                => $u->name,
                        'unique_code'         => $u->unique_code,
                        'match_points'        => (int) $u->match_points,
                        'profile_picture_url' => $u->profile_picture_url,
                    ];
                });

            return [
                'id'         => $match->id,
                'team1'      => $match->team1 ? $match->team1->name : '?',
                'team2'      => $match->team2 ? $match->team2->name : '?',
                'match_date' => $match->match_date ? $match->match_date->format('d/m/Y') : null,
                'winners'    => $winners,
            ];
        });

        return response()->json(['status' => 'success', 'data' => $result]);
    }

    public function recentMatchWinners()
    {
        // Most recently completed match within the last 24 hours
        $match = MatchGame::with(['team1', 'team2'])
            ->where('status', 'completed')
            ->where('updated_at', '>=', now()->subHours(24))
            ->orderByDesc('updated_at')
            ->first();

        if (!$match) {
            return response()->json(['status' => 'success', 'data' => ['match' => null, 'winners' => []]]);
        }

        $winners = User::select('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->selectRaw('SUM(predictions.points_earned) as match_points')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('predictions.match_id', $match->id)
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.profile_picture')
            ->orderByDesc('match_points')
            ->limit(10)
            ->get()
            ->map(function ($u, $i) {
                return [
                    'rank'                => $i + 1,
                    'id'                  => $u->id,
                    'name'                => $u->name,
                    'unique_code'         => $u->unique_code,
                    'match_points'        => (int) $u->match_points,
                    'profile_picture_url' => $u->profile_picture_url,
                ];
            });

        return response()->json([
            'status' => 'success',
            'data'   => [
                'match'   => [
                    'id'         => $match->id,
                    'team1'      => $match->team1 ? $match->team1->name : '?',
                    'team2'      => $match->team2 ? $match->team2->name : '?',
                    'match_date' => $match->match_date ? $match->match_date->format('d/m/Y') : null,
                ],
                'winners' => $winners,
            ],
        ]);
    }

    public function myPoints(Request $request)
    {
        $user  = JWTAuth::parseToken()->authenticate();
        $total = Prediction::where('user_id', $user->id)->sum('points_earned');

        $rank = User::select('users.id')
            ->selectRaw('SUM(predictions.points_earned) as total_points')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->groupBy('users.id')
            ->orderByDesc('total_points')
            ->get()
            ->search(function ($u) use ($user) { return $u->id === $user->id; });

        return response()->json([
            'status' => 'success',
            'data'   => [
                'total_points' => (int) $total,
                'rank'         => $rank !== false ? $rank + 1 : null,
            ],
        ]);
    }
}
