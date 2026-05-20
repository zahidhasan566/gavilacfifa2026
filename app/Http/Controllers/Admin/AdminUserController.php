<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prediction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminUserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::where('role', 'user');

        if ($request->filled('search')) {
            $s = $request->search;
            $query->where(function ($q) use ($s) {
                $q->where('name', 'like', "%$s%")
                  ->orWhere('unique_code', 'like', "%$s%")
                  ->orWhere('email', 'like', "%$s%")
                  ->orWhere('mobile', 'like', "%$s%");
            });
        }

        $users = $query->orderBy('name')->paginate(20);

        $users->getCollection()->transform(function ($u) {
            $u->total_points = $u->totalPoints();
            $u->profile_picture_url = $u->profile_picture_url;
            return $u;
        });

        return response()->json(['status' => 'success', 'data' => $users]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'        => 'required|string|max:255',
            'unique_code' => 'required|string|unique:users,unique_code',
            'mobile'      => 'nullable|string|max:20',
            'email'       => 'required|email|unique:users,email',
            'password'    => 'required|string|min:6',
            'role'        => 'in:admin,user',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name'            => $request->name,
            'unique_code'     => $request->unique_code,
            'chamber_address' => $request->chamber_address,
            'mobile'          => $request->mobile,
            'email'           => $request->email,
            'password'        => Hash::make($request->password),
            'role'            => $request->role ?? 'user',
            'status'          => 1,
        ]);

        return response()->json(['status' => 'success', 'data' => $user], 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name'        => 'sometimes|string|max:255',
            'unique_code' => "sometimes|string|unique:users,unique_code,$id",
            'email'       => "sometimes|email|unique:users,email,$id",
            'mobile'      => 'nullable|string|max:20',
            'password'    => 'nullable|string|min:6',
            'status'      => 'sometimes|in:0,1',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $data = $request->only(['name', 'unique_code', 'chamber_address', 'mobile', 'email', 'role', 'status']);
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);
        return response()->json(['status' => 'success', 'data' => $user]);
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'User deleted.']);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        $user->total_points = $user->totalPoints();
        return response()->json(['status' => 'success', 'data' => $user]);
    }
}
