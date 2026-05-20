<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Unauthorized.'], 401);
        }

        if (!$user || $user->role !== 'admin') {
            return response()->json(['status' => 'error', 'message' => 'Access denied. Admin only.'], 403);
        }

        return $next($request);
    }
}
