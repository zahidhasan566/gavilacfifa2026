<?php

namespace App\Http\Controllers;

use App\Models\MatchGame;
use App\Models\Prediction;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class PredictionController extends Controller
{
    public function questions(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $matchId = $request->match_id;

        if ($matchId) {
            $match = MatchGame::with(['team1', 'team2'])->find($matchId);
            $matchQuestions = Question::where('match_id', $matchId)
                ->where('is_active', true)
                ->orderBy('sort_order')
                ->get();
        } else {
            $match = MatchGame::with(['team1', 'team2'])
                ->whereIn('status', ['live', 'upcoming'])
                ->orderBy('match_date')
                ->first();

            $matchQuestions = $match
                ? Question::where('match_id', $match->id)->where('is_active', true)->orderBy('sort_order')->get()
                : collect();
        }

        // Championship questions (no match)
        $champQuestions = Question::whereNull('match_id')
            ->where('is_active', true)
            ->orderBy('sort_order')
            ->get();

        // User's existing predictions (match)
        $matchPredictions = $user && $match
            ? Prediction::where('user_id', $user->id)->where('match_id', $match->id)->get()->keyBy('question_id')
            : collect();

        // User's existing championship predictions (null match_id)
        $champIds = $champQuestions->pluck('id');
        $champPredictions = $user && $champIds->count()
            ? Prediction::where('user_id', $user->id)->whereNull('match_id')->whereIn('question_id', $champIds)->get()->keyBy('question_id')
            : collect();

        $mapQuestion = function ($q, $predMap, $matchObj = null) {
            $prediction = $predMap->get($q->id);
            $t1 = $matchObj ? $matchObj->team1 : null;
            $t2 = $matchObj ? $matchObj->team2 : null;
            return [
                'id'              => $q->id,
                'question_text'   => $q->question_text,
                'type'            => $q->type,
                'points'          => $q->points,
                'options'         => $q->options ?? [],
                'team1'           => $t1 ? ['id' => $t1->id, 'name' => $t1->name, 'flag_emoji' => $t1->flag_emoji] : null,
                'team2'           => $t2 ? ['id' => $t2->id, 'name' => $t2->name, 'flag_emoji' => $t2->flag_emoji] : null,
                'selected_answer' => $prediction ? $prediction->selected_answer : null,
                'is_correct'      => $prediction ? $prediction->is_correct : null,
                'points_earned'   => $prediction ? $prediction->points_earned : 0,
            ];
        };

        return response()->json([
            'status'    => 'success',
            'match'     => $match ? [
                'id'         => $match->id,
                'group_name' => $match->group_name,
                'status'     => $match->status,
                'match_date' => $match->match_date ? $match->match_date->format('d/m/Y') : null,
                'team1'      => $match->team1 ? ['id' => $match->team1->id, 'name' => $match->team1->name, 'flag_emoji' => $match->team1->flag_emoji] : null,
                'team2'      => $match->team2 ? ['id' => $match->team2->id, 'name' => $match->team2->name, 'flag_emoji' => $match->team2->flag_emoji] : null,
            ] : null,
            'questions'              => $matchQuestions->map(function ($q) use ($mapQuestion, $matchPredictions, $match) { return $mapQuestion($q, $matchPredictions, $match); }),
            'already_submitted'      => $matchPredictions->count() > 0,
            'champ_questions'        => $champQuestions->map(function ($q) use ($mapQuestion, $champPredictions) { return $mapQuestion($q, $champPredictions); }),
            'champ_already_submitted' => $champPredictions->count() > 0,
        ]);
    }

    public function submit(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();

        $isChampionship = $request->boolean('is_championship');

        if ($isChampionship) {
            $validator = Validator::make($request->all(), [
                'predictions'                  => 'required|array|min:1',
                'predictions.*.question_id'    => 'required|exists:questions,id',
                'predictions.*.selected_answer' => 'required|string',
            ]);
        } else {
            $validator = Validator::make($request->all(), [
                'match_id'                     => 'required|exists:match_games,id',
                'predictions'                  => 'required|array|min:1',
                'predictions.*.question_id'    => 'required|exists:questions,id',
                'predictions.*.selected_answer' => 'required|string',
            ]);
        }

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        if (!$isChampionship) {
            $match = MatchGame::find($request->match_id);
            if ($match->status === 'completed') {
                return response()->json(['status' => 'error', 'message' => 'This match is already completed.'], 422);
            }
        }

        $saved = [];
        foreach ($request->predictions as $pred) {
            $existing = Prediction::where('user_id', $user->id)
                ->where('question_id', $pred['question_id'])
                ->when(!$isChampionship, function ($q) use ($request) { return $q->where('match_id', $request->match_id); })
                ->when($isChampionship, function ($q) { return $q->whereNull('match_id'); })
                ->first();

            if (!$existing) {
                $saved[] = Prediction::create([
                    'user_id'         => $user->id,
                    'match_id'        => $isChampionship ? null : $request->match_id,
                    'question_id'     => $pred['question_id'],
                    'selected_answer' => $pred['selected_answer'],
                    'points_earned'   => 0,
                ]);
            }
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Predictions submitted successfully!',
            'count'   => count($saved),
        ]);
    }

    public function myPredictions()
    {
        $user = JWTAuth::parseToken()->authenticate();

        $predictions = Prediction::with(['match.team1', 'match.team2', 'question'])
            ->where('user_id', $user->id)
            ->orderByDesc('created_at')
            ->get();

        return response()->json([
            'status'       => 'success',
            'data'         => $predictions,
            'total_points' => $predictions->sum('points_earned'),
        ]);
    }
}
