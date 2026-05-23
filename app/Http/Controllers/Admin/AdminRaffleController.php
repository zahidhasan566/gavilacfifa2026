<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use App\Models\RaffleDraw;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminRaffleController extends Controller
{
    public function eligibleUsers(Request $request)
    {
        $minPoints = (int) ($request->min_points ?? 0);
        $matchId   = $request->match_id ?? null;

        $query = User::select('users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.profile_picture')
            ->selectRaw('COALESCE(SUM(predictions.points_earned), 0) as total_points')
            ->leftJoin('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.profile_picture')
            ->having('total_points', '>=', $minPoints)
            ->orderByDesc('total_points');

        if ($matchId) {
            $query->whereExists(function ($q) use ($matchId) {
                $q->selectRaw(1)
                  ->from('predictions')
                  ->whereColumn('predictions.user_id', 'users.id')
                  ->where('predictions.match_id', $matchId);
            });
        }

        $users = $query->get()->map(fn($u) => [
            'id'                  => $u->id,
            'name'                => $u->name,
            'unique_code'         => $u->unique_code,
            'mobile'              => $u->mobile,
            'total_points'        => (int) $u->total_points,
            'profile_picture_url' => $u->profile_picture ? asset('storage/' . $u->profile_picture) : asset('images/default-avatar.png'),
        ]);

        return response()->json(['status' => 'success', 'data' => $users]);
    }

    public function winnerCount(Request $request)
    {
        $matchId = $request->match_id ?? null;

        $count = RaffleDraw::when($matchId, fn($q) => $q->where('match_id', $matchId))
            ->unless($matchId, fn($q) => $q->whereNull('match_id'))
            ->count();

        return response()->json(['status' => 'success', 'data' => ['count' => $count]]);
    }

    public function draw(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id'      => 'required|exists:users,id',
            'match_id'     => 'nullable|exists:match_games,id',
            'prize_points' => 'nullable|integer|min:0',
            'notes'        => 'nullable|string',
            'max_winners'  => 'nullable|integer|min:1',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $matchId    = $request->match_id ?? null;
        $maxWinners = (int) ($request->max_winners ?? 10);

        $currentCount = RaffleDraw::when($matchId, fn($q) => $q->where('match_id', $matchId))
            ->unless($matchId, fn($q) => $q->whereNull('match_id'))
            ->count();

        if ($currentCount >= $maxWinners) {
            return response()->json(['status' => 'error', 'message' => "Maximum winners ({$maxWinners}) already reached for this match."], 422);
        }

        $draw = RaffleDraw::create([
            'user_id'      => $request->user_id,
            'match_id'     => $matchId,
            'draw_date'    => now()->toDateString(),
            'notes'        => $request->notes,
            'prize_points' => $request->prize_points ?? 0,
        ]);

        Notification::create([
            'user_id' => $request->user_id,
            'title'   => 'Congratulations! You won the Raffle Draw!',
            'message' => 'You have been selected as the raffle draw winner for FIFA World Cup 2026. ' . ($request->notes ?? ''),
            'is_read' => false,
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Raffle draw winner selected successfully.',
            'data'    => $draw->load('user'),
        ]);
    }

    public function randomDraw(Request $request)
    {
        $minPoints = (int) ($request->min_points ?? 0);
        $matchId   = $request->match_id ?? null;

        $query = User::select('users.id')
            ->selectRaw('COALESCE(SUM(predictions.points_earned), 0) as total_points')
            ->leftJoin('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->groupBy('users.id')
            ->having('total_points', '>=', $minPoints);

        if ($matchId) {
            $query->whereExists(function ($q) use ($matchId) {
                $q->selectRaw(1)
                  ->from('predictions')
                  ->whereColumn('predictions.user_id', 'users.id')
                  ->where('predictions.match_id', $matchId);
            });
        }

        $eligible = $query->get();

        if ($eligible->isEmpty()) {
            return response()->json(['status' => 'error', 'message' => 'No eligible users found.'], 422);
        }

        $winner = $eligible->random();
        $user   = User::find($winner->id);

        return response()->json([
            'status' => 'success',
            'data'   => [
                'id'                  => $user->id,
                'name'                => $user->name,
                'unique_code'         => $user->unique_code,
                'total_points'        => (int) $winner->total_points,
                'profile_picture_url' => $user->profile_picture ? asset('storage/' . $user->profile_picture) : asset('images/default-avatar.png'),
            ],
        ]);
    }

    public function history(Request $request)
    {
        $matchId = $request->match_id ?? null;

        $draws = RaffleDraw::with('user')
            ->when($matchId, fn($q) => $q->where('match_id', $matchId))
            ->unless($matchId, fn($q) => $q->whereNull('match_id'))
            ->orderByDesc('draw_date')
            ->get();

        return response()->json(['status' => 'success', 'data' => $draws]);
    }
}
