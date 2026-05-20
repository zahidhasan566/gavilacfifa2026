<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FifaFact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminFifaFactController extends Controller
{
    public function index(Request $request)
    {
        $query = FifaFact::query();
        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }
        return response()->json(['status' => 'success', 'data' => $query->orderBy('sort_order')->get()]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type'        => 'required|in:player,news',
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string',
            'image'       => 'nullable|image|max:2048',
            'link'        => 'nullable|url',
            'sort_order'  => 'integer|min:0',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('facts', 'public');
        }

        $fact = FifaFact::create([
            'type'        => $request->type,
            'title'       => $request->title,
            'description' => $request->description,
            'image'       => $imagePath,
            'link'        => $request->link,
            'sort_order'  => $request->sort_order ?? 0,
            'is_active'   => $request->boolean('is_active', true),
        ]);

        return response()->json(['status' => 'success', 'data' => $fact], 201);
    }

    public function update(Request $request, $id)
    {
        $fact = FifaFact::findOrFail($id);
        $data = $request->only(['type', 'title', 'description', 'link', 'sort_order', 'is_active']);
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('facts', 'public');
        }
        $fact->update($data);
        return response()->json(['status' => 'success', 'data' => $fact]);
    }

    public function destroy($id)
    {
        FifaFact::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Fact deleted.']);
    }
}
