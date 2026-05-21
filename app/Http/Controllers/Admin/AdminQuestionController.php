<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminQuestionController extends Controller
{
    public function index(Request $request)
    {
        $query = Question::with('match.team1', 'match.team2');
        if ($request->filled('match_id')) {
            $query->where('match_id', $request->match_id);
        }
        return response()->json(['status' => 'success', 'data' => $query->orderBy('sort_order')->get()]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'match_id'      => 'nullable|exists:match_games,id',
            'question_text' => 'required|string',
            'type'          => 'required|in:team_choice,dropdown,mcq,text',
            'points'        => 'required|integer|min:1',
            'options'       => 'nullable|array',
            'sort_order'    => 'integer|min:0',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $question = Question::create([
            'match_id'      => $request->match_id,
            'question_text' => $request->question_text,
            'type'          => $request->type,
            'points'        => $request->points,
            'options'       => $request->options,
            'correct_answer' => $request->correct_answer,
            'is_active'     => $request->boolean('is_active', true),
            'sort_order'    => $request->sort_order ?? 0,
        ]);

        return response()->json(['status' => 'success', 'data' => $question], 201);
    }

    public function update(Request $request, $id)
    {
        $question = Question::findOrFail($id);
        $question->update($request->only([
            'match_id', 'question_text', 'type', 'points',
            'options', 'correct_answer', 'is_active', 'sort_order',
        ]));
        return response()->json(['status' => 'success', 'data' => $question]);
    }

    public function destroy($id)
    {
        Question::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Question deleted.']);
    }

    public function setCorrectAnswer(Request $request, $id)
    {
        $question = Question::findOrFail($id);
        $question->update(['correct_answer' => $request->correct_answer]);
        return response()->json(['status' => 'success', 'data' => $question]);
    }
}
