<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AdminNotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::with('user')->orderByDesc('created_at')->paginate(20);
        return response()->json(['status' => 'success', 'data' => $notifications]);
    }

    public function broadcast(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title'   => 'required|string|max:255',
            'message' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $notification = Notification::create([
            'user_id'      => null,
            'title'        => $request->title,
            'message'      => $request->message,
            'is_broadcast' => true,
        ]);

        return response()->json(['status' => 'success', 'data' => $notification], 201);
    }

    public function destroy($id)
    {
        Notification::findOrFail($id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Notification deleted.']);
    }
}
