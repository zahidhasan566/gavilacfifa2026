<?php

namespace App\Http\Controllers;

use App\Models\MatchGame;
use App\Models\Team;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    public function index(Request $request)
    {
        $query = MatchGame::with(['team1', 'team2'])
            ->orderBy('match_date')
            ->orderBy('match_time');

        if ($request->filled('group')) {
            $query->where('group_name', $request->group);
        }
        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        // Never return upcoming matches with a date in the past — stale seeder records before sync corrects them
        $query->where(function ($q) {
            $q->where('status', '!=', 'upcoming')
              ->orWhere('match_date', '>=', now()->toDateString());
        });

        $matches = $query->get()->map(fn($m) => $this->matchResource($m));

        return response()->json(['status' => 'success', 'data' => $matches]);
    }

    public function live()
    {
        $matches = MatchGame::with(['team1', 'team2'])
            ->where('status', 'live')
            ->get()
            ->map(fn($m) => $this->matchResource($m));

        return response()->json(['status' => 'success', 'data' => $matches]);
    }

    public function groups()
    {
        $teams = Team::orderBy('group_name')->orderBy('name')->get();
        $grouped = $teams->groupBy('group_name');
        return response()->json(['status' => 'success', 'data' => $grouped]);
    }

    public function show($id)
    {
        $match = MatchGame::with(['team1', 'team2', 'questions'])->findOrFail($id);
        return response()->json(['status' => 'success', 'data' => $this->matchResource($match)]);
    }

    private function matchResource(MatchGame $m): array
    {
        $matchTimeBd = null;
        $matchDateBd = null;
        if ($m->match_date && $m->match_time) {
            $bdDateTime = \Carbon\Carbon::parse(
                $m->match_date->format('Y-m-d') . ' ' . $m->match_time, 'UTC'
            )->setTimezone('Asia/Dhaka');
            $matchTimeBd = $bdDateTime->format('h:i A');
            $matchDateBd = $bdDateTime->format('Y-m-d');
        }

        return [
            'id'            => $m->id,
            'group_name'    => $m->group_name,
            'round_number'  => $m->round_number,
            'team1'         => $m->team1 ? ['id' => $m->team1->id, 'name' => $m->team1->name, 'flag_emoji' => $m->team1->flag_emoji, 'flag_image' => $m->team1->flag_image] : null,
            'team2'         => $m->team2 ? ['id' => $m->team2->id, 'name' => $m->team2->name, 'flag_emoji' => $m->team2->flag_emoji, 'flag_image' => $m->team2->flag_image] : null,
            'venue'         => $m->venue,
            'match_date'    => $m->match_date ? $m->match_date->format('Y-m-d') : null,
            'match_date_bd' => $matchDateBd,
            'match_time'    => $m->match_time,
            'match_time_bd' => $matchTimeBd,
            'status'        => $m->status,
            'team1_score'  => $m->team1_score,
            'team2_score'  => $m->team2_score,
            'team1_half1'  => $m->team1_half1,
            'team1_half2'  => $m->team1_half2,
            'team2_half1'  => $m->team2_half1,
            'team2_half2'  => $m->team2_half2,
        ];
    }
}
