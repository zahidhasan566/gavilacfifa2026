<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class NotificationController extends Controller
{
    public function index()
    {
        $user = JWTAuth::parseToken()->authenticate();

        $notifications = Notification::where(function ($q) use ($user) {
                $q->where('user_id', $user->id)->orWhere('is_broadcast', true);
            })
            ->orderByDesc('created_at')
            ->limit(20)
            ->get();

        $unreadCount = $notifications->where('is_read', false)->count();

        return response()->json([
            'status'       => 'success',
            'data'         => $notifications,
            'unread_count' => $unreadCount,
        ]);
    }

    public function markRead($id)
    {
        $user = JWTAuth::parseToken()->authenticate();
        $notification = Notification::where('id', $id)
            ->where(function ($q) use ($user) {
                $q->where('user_id', $user->id)->orWhere('is_broadcast', true);
            })->first();

        if ($notification) {
            $notification->update(['is_read' => true]);
        }

        return response()->json(['status' => 'success', 'message' => 'Marked as read.']);
    }

    public function markAllRead()
    {
        $user = JWTAuth::parseToken()->authenticate();
        Notification::where(function ($q) use ($user) {
            $q->where('user_id', $user->id)->orWhere('is_broadcast', true);
        })->update(['is_read' => true]);

        return response()->json(['status' => 'success', 'message' => 'All notifications marked as read.']);
    }
}
