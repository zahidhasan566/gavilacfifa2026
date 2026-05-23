<?php

namespace App\Http\Controllers;

use App\Models\RaffleDraw;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class RaffleController extends Controller
{
    /**
     * Return the latest raffle draw winner and current user's opt-in status.
     */
    public function status()
    {
        $user = JWTAuth::parseToken()->authenticate();

        $latest = RaffleDraw::with('user')
            ->orderByDesc('created_at')
            ->first();

        $winner = null;
        if ($latest && $latest->user) {
            $u = $latest->user;
            $winner = [
                'id'           => $latest->id,
                'name'         => $u->name,
                'unique_code'  => $u->unique_code,
                'draw_date'    => $latest->draw_date,
                'prize_points' => $latest->prize_points,
                'notes'        => $latest->notes,
                'is_me'        => $u->id === $user->id,
                'profile_picture_url' => $u->profile_picture_url,
                'created_at'   => $latest->created_at ? $latest->created_at->toIso8601String() : null,
            ];
        }

        return response()->json([
            'status'        => 'success',
            'latest_winner' => $winner,
            'opted_in'      => (bool) $user->raffle_opted_in,
        ]);
    }

    /**
     * Toggle the current user's raffle opt-in.
     */
    public function join()
    {
        $user = JWTAuth::parseToken()->authenticate();
        $user->raffle_opted_in = !$user->raffle_opted_in;
        $user->save();

        return response()->json([
            'status'   => 'success',
            'opted_in' => (bool) $user->raffle_opted_in,
            'message'  => $user->raffle_opted_in ? 'You have joined the raffle!' : 'You have left the raffle.',
        ]);
    }
}
