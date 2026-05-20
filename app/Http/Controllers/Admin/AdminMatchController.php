<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MatchGame;
use App\Models\Prediction;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminMatchController extends Controller
{
    public function index(Request $request)
    {
        $query = MatchGame::with(['team1', 'team2'])->orderBy('match_date')->orderBy('match_time');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        return response()->json(['status' => 'success', 'data' => $query->get()]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'group_name'   => 'nullable|string|max:5',
            'round_number' => 'required|integer|min:1',
            'team1_id'     => 'required|exists:teams,id',
            'team2_id'     => 'required|exists:teams,id|different:team1_id',
            'venue'        => 'nullable|string',
            'match_date'   => 'required|date',
            'match_time'   => 'nullable',
            'status'       => 'in:upcoming,live,completed',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $match = MatchGame::create($request->only([
            'group_name', 'round_number', 'team1_id', 'team2_id',
            'venue', 'match_date', 'match_time', 'status',
        ]));

        return response()->json(['status' => 'success', 'data' => $match->load(['team1', 'team2'])], 201);
    }

    public function update(Request $request, $id)
    {
        $match = MatchGame::findOrFail($id);
        $match->update($request->only([
            'group_name', 'round_number', 'team1_id', 'team2_id',
            'venue', 'match_date', 'match_time', 'status',
        ]));
        return response()->json(['status' => 'success', 'data' => $match->load(['team1', 'team2'])]);
    }

    public function updateScore(Request $request, $id)
    {
        $match = MatchGame::findOrFail($id);
        $match->update($request->only([
            'team1_score', 'team2_score',
            'team1_half1', 'team1_half2', 'team2_half1', 'team2_half2',
            'status',
        ]));
        return response()->json(['status' => 'success', 'data' => $match]);
    }

    public function destroy($id)
    {
        MatchGame::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Match deleted.']);
    }

    public function calculateResults($matchId)
    {
        $match = MatchGame::with('questions')->findOrFail($matchId);

        if ($match->status !== 'completed') {
            return response()->json(['status' => 'error', 'message' => 'Match is not completed yet.'], 422);
        }

        $updated = 0;
        foreach ($match->questions as $question) {
            if (!$question->correct_answer) continue;

            $predictions = Prediction::where('match_id', $matchId)
                ->where('question_id', $question->id)
                ->get();

            foreach ($predictions as $prediction) {
                $isCorrect = strtolower(trim($prediction->selected_answer)) === strtolower(trim($question->correct_answer));
                $prediction->update([
                    'is_correct'    => $isCorrect,
                    'points_earned' => $isCorrect ? $question->points : 0,
                ]);
                $updated++;
            }
        }

        return response()->json(['status' => 'success', 'message' => "Calculated results for $updated predictions."]);
    }
}
