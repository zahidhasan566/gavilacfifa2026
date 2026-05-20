<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class WinnersController extends Controller
{
    public function leaderboard(Request $request)
    {
        $date = $request->date ?? now()->toDateString();

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
                    'rank'             => $index + 1,
                    'id'               => $u->id,
                    'name'             => $u->name,
                    'unique_code'      => $u->unique_code,
                    'total_points'     => (int) $u->total_points,
                    'profile_picture_url' => $u->profile_picture ? asset('storage/' . $u->profile_picture) : asset('images/default-avatar.png'),
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
            'data' => [
                'id'               => $winner->id,
                'name'             => $winner->name,
                'unique_code'      => $winner->unique_code,
                'total_points'     => (int) $winner->total_points,
                'profile_picture_url' => $winner->profile_picture ? asset('storage/' . $winner->profile_picture) : asset('images/default-avatar.png'),
                'date'             => $today,
            ],
        ]);
    }

    public function myPoints(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
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
