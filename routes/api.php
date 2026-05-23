<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\PredictionController;
use App\Http\Controllers\WinnersController;
use App\Http\Controllers\FifaFactController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\RaffleController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminTeamController;
use App\Http\Controllers\Admin\AdminMatchController;
use App\Http\Controllers\Admin\AdminQuestionController;
use App\Http\Controllers\Admin\AdminRaffleController;
use App\Http\Controllers\Admin\AdminReportController;
use App\Http\Controllers\Admin\AdminFifaFactController;
use App\Http\Controllers\Admin\AdminNotificationController;

// Public auth routes
Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login',    [AuthController::class, 'login']);
});

// Authenticated user routes (JWT)
Route::middleware('jwt')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('logout',           [AuthController::class, 'logout']);
        Route::post('refresh',          [AuthController::class, 'refresh']);
        Route::get('me',                [AuthController::class, 'me']);
        Route::post('update-profile',   [AuthController::class, 'updateProfile']);
    });

    // Matches
    Route::get('matches',           [MatchController::class, 'index']);
    Route::get('matches/live',      [MatchController::class, 'live']);
    Route::get('matches/groups',    [MatchController::class, 'groups']);
    Route::get('matches/{id}',      [MatchController::class, 'show']);

    // Predictions
    Route::get('predictions/questions', [PredictionController::class, 'questions']);
    Route::post('predictions/submit',   [PredictionController::class, 'submit']);
    Route::get('predictions/my',        [PredictionController::class, 'myPredictions']);

    // Winners / Leaderboard
    Route::get('winners',           [WinnersController::class, 'leaderboard']);
    Route::get('winners/today',     [WinnersController::class, 'todayWinner']);
    Route::get('winners/my-points', [WinnersController::class, 'myPoints']);

    // FIFA Facts
    Route::get('facts', [FifaFactController::class, 'index']);

    // Raffle (user-facing)
    Route::get('raffle/status',  [RaffleController::class, 'status']);
    Route::post('raffle/join',   [RaffleController::class, 'join']);

    // Notifications
    Route::get('notifications',              [NotificationController::class, 'index']);
    Route::post('notifications/{id}/read',   [NotificationController::class, 'markRead']);
    Route::post('notifications/read-all',    [NotificationController::class, 'markAllRead']);
});

// Admin routes (JWT + admin role)
Route::middleware(['jwt', 'admin'])->prefix('admin')->group(function () {
    // Stats
    Route::get('stats', [AdminReportController::class, 'dashboardStats']);

    // Users
    Route::get('users',         [AdminUserController::class, 'index']);
    Route::post('users',        [AdminUserController::class, 'store']);
    Route::get('users/{id}',    [AdminUserController::class, 'show']);
    Route::put('users/{id}',    [AdminUserController::class, 'update']);
    Route::delete('users/{id}', [AdminUserController::class, 'destroy']);

    // Teams
    Route::get('teams',         [AdminTeamController::class, 'index']);
    Route::post('teams',        [AdminTeamController::class, 'store']);
    Route::put('teams/{id}',    [AdminTeamController::class, 'update']);
    Route::delete('teams/{id}', [AdminTeamController::class, 'destroy']);

    // Matches
    Route::get('matches',                            [AdminMatchController::class, 'index']);
    Route::post('matches',                           [AdminMatchController::class, 'store']);
    Route::put('matches/{id}',                       [AdminMatchController::class, 'update']);
    Route::delete('matches/{id}',                    [AdminMatchController::class, 'destroy']);
    Route::post('matches/{id}/score',                [AdminMatchController::class, 'updateScore']);
    Route::post('matches/{id}/calculate-results',    [AdminMatchController::class, 'calculateResults']);

    // Questions
    Route::get('questions',                       [AdminQuestionController::class, 'index']);
    Route::post('questions',                      [AdminQuestionController::class, 'store']);
    Route::put('questions/{id}',                  [AdminQuestionController::class, 'update']);
    Route::delete('questions/{id}',               [AdminQuestionController::class, 'destroy']);
    Route::post('questions/{id}/correct-answer',  [AdminQuestionController::class, 'setCorrectAnswer']);

    // Raffle Draw
    Route::get('raffle/eligible',      [AdminRaffleController::class, 'eligibleUsers']);
    Route::get('raffle/winner-count',  [AdminRaffleController::class, 'winnerCount']);
    Route::post('raffle/draw',         [AdminRaffleController::class, 'draw']);
    Route::post('raffle/random',       [AdminRaffleController::class, 'randomDraw']);
    Route::get('raffle/history',       [AdminRaffleController::class, 'history']);

    // Reports
    Route::get('reports/points',        [AdminReportController::class, 'pointsReport']);
    Route::get('reports/participation', [AdminReportController::class, 'participationReport']);
    Route::get('reports/predictions',   [AdminReportController::class, 'predictionsDetail']);

    // FIFA Facts (admin)
    Route::get('facts',         [AdminFifaFactController::class, 'index']);
    Route::post('facts',        [AdminFifaFactController::class, 'store']);
    Route::put('facts/{id}',    [AdminFifaFactController::class, 'update']);
    Route::delete('facts/{id}', [AdminFifaFactController::class, 'destroy']);

    // Notifications (admin)
    Route::get('notifications',             [AdminNotificationController::class, 'index']);
    Route::post('notifications/broadcast',  [AdminNotificationController::class, 'broadcast']);
    Route::delete('notifications/{id}',     [AdminNotificationController::class, 'destroy']);
});
