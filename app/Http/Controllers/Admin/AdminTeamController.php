<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminTeamController extends Controller
{
    public function index()
    {
        return response()->json(['status' => 'success', 'data' => Team::orderBy('group_name')->orderBy('name')->get()]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'       => 'required|string|max:100',
            'group_name' => 'required|string|max:5',
            'flag_emoji' => 'nullable|string|max:10',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $picturePath = null;
        if ($request->hasFile('flag_image')) {
            $picturePath = $request->file('flag_image')->store('flags', 'public');
        }

        $team = Team::create([
            'name'       => $request->name,
            'group_name' => strtoupper($request->group_name),
            'flag_emoji' => $request->flag_emoji,
            'flag_image' => $picturePath,
        ]);

        return response()->json(['status' => 'success', 'data' => $team], 201);
    }

    public function update(Request $request, $id)
    {
        $team = Team::findOrFail($id);

        $data = $request->only(['name', 'group_name', 'flag_emoji']);
        if ($request->filled('group_name')) {
            $data['group_name'] = strtoupper($request->group_name);
        }
        if ($request->hasFile('flag_image')) {
            $data['flag_image'] = $request->file('flag_image')->store('flags', 'public');
        }

        $team->update($data);
        return response()->json(['status' => 'success', 'data' => $team]);
    }

    public function destroy($id)
    {
        Team::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Team deleted.']);
    }
}
