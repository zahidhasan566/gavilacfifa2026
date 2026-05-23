<?php

namespace App\Http\Controllers;

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
            ->orderBy('match_id')
            ->orderByDesc('draw_date')
            ->get();

        $carousel = $draws->map(fn($d) => [
            'id'                  => $d->id,
            'name'                => $d->user?->name,
            'unique_code'         => $d->user?->unique_code,
            'prize_points'        => $d->prize_points,
            'draw_date'           => $d->draw_date?->format('d/m/Y'),
            'notes'               => $d->notes,
            'profile_picture_url' => $d->user?->profile_picture_url,
            'match_label'         => $d->match
                ? ($d->match->team1?->name . ' vs ' . $d->match->team2?->name)
                : 'General Draw',
            'match_date'          => $d->match?->match_date?->format('d/m/Y'),
        ])->values();

        $byMatch = $draws->groupBy(fn($d) => $d->match_id ?? 'general')
            ->map(function ($group) {
                $first = $group->first();
                return [
                    'match_label' => $first->match
                        ? ($first->match->team1?->name . ' vs ' . $first->match->team2?->name)
                        : 'General Draw',
                    'match_date'  => $first->match?->match_date?->format('d/m/Y'),
                    'winners'     => $group->map(fn($d) => [
                        'id'                  => $d->id,
                        'name'                => $d->user?->name,
                        'unique_code'         => $d->user?->unique_code,
                        'prize_points'        => $d->prize_points,
                        'draw_date'           => $d->draw_date?->format('d/m/Y'),
                        'notes'               => $d->notes,
                        'profile_picture_url' => $d->user?->profile_picture_url,
                    ])->values(),
                ];
            })->values();

        return response()->json([
            'status' => 'success',
            'data'   => ['carousel' => $carousel, 'by_match' => $byMatch],
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
            ->search(fn($u) => $u->id === $user->id);

        return response()->json([
            'status' => 'success',
            'data'   => [
                'total_points' => (int) $total,
                'rank'         => $rank !== false ? $rank + 1 : null,
            ],
        ]);
    }
}
