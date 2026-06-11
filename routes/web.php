<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// TEMPORARY SYNC ROUTE — DELETE AFTER USE
Route::get('/run-sync', function () {
    try {
        \Illuminate\Support\Facades\Artisan::call('scores:sync');
        $output = \Illuminate\Support\Facades\Artisan::output();

        $matches = \App\Models\MatchGame::with(['team1','team2'])
            ->whereBetween('match_date', [date('Y-m-d', strtotime('-1 day')), date('Y-m-d', strtotime('+7 days'))])
            ->orderBy('match_date')->orderBy('match_time')->get();

        $rows = $matches->map(function ($m) {
            return sprintf(
                '%s %s | %s vs %s | status=%s | ext=%s',
                ($m->match_date ? $m->match_date->format('Y-m-d') : 'null'), $m->match_time,
                ($m->team1 ? $m->team1->name : '?'), ($m->team2 ? $m->team2->name : '?'),
                $m->status, ($m->external_id ?? 'none')
            );
        })->implode('<br>');

        return '<h2 style="color:green">Sync complete</h2><pre>' . htmlspecialchars($output) . '</pre><hr><h3>DB Matches (±7 days)</h3><p>' . $rows . '</p>';
    } catch (\Exception $e) {
        return '<h2 style="color:red">Sync failed:</h2><pre>' . htmlspecialchars($e->getMessage()) . '</pre>';
    }
});

Route::get('/{app?}',[HomeController::class,'index'])->where('app','.*');
