<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\MatchGame;
use App\Models\Prediction;
use App\Models\User;
use Illuminate\Http\Request;

class AdminReportController extends Controller
{
    public function pointsReport(Request $request)
    {
        $query = User::select('users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.email')
            ->selectRaw('COALESCE(SUM(predictions.points_earned), 0) as total_points')
            ->selectRaw('COUNT(DISTINCT predictions.match_id) as matches_participated')
            ->selectRaw('COUNT(predictions.id) as total_predictions')
            ->selectRaw('SUM(CASE WHEN predictions.is_correct = 1 THEN 1 ELSE 0 END) as correct_predictions')
            ->leftJoin('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.email')
            ->orderByDesc('total_points');

        if ($request->filled('search')) {
            $s = $request->search;
            $query->where(function ($q) use ($s) {
                $q->where('users.name', 'like', "%$s%")
                  ->orWhere('users.unique_code', 'like', "%$s%");
            });
        }

        $data = $query->get()->map(fn($u, $i) => [
            'rank'                 => $i + 1,
            'name'                 => $u->name,
            'unique_code'          => $u->unique_code,
            'mobile'               => $u->mobile,
            'email'                => $u->email,
            'total_points'         => (int) $u->total_points,
            'matches_participated' => (int) $u->matches_participated,
            'total_predictions'    => (int) $u->total_predictions,
            'correct_predictions'  => (int) $u->correct_predictions,
        ]);

        return response()->json(['status' => 'success', 'data' => $data]);
    }

    public function participationReport(Request $request)
    {
        $filter = $request->input('filter', 'all'); // all | participated | not_participated
        $search = $request->input('search', '');

        $query = User::select(
                'users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.email', 'users.status'
            )
            ->selectRaw('COUNT(DISTINCT predictions.match_id) as matches_participated')
            ->selectRaw('COUNT(predictions.id) as total_predictions')
            ->selectRaw('COALESCE(SUM(predictions.points_earned), 0) as total_points')
            ->leftJoin('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->groupBy('users.id', 'users.name', 'users.unique_code', 'users.mobile', 'users.email', 'users.status');

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('users.name', 'like', "%$search%")
                  ->orWhere('users.unique_code', 'like', "%$search%")
                  ->orWhere('users.mobile', 'like', "%$search%");
            });
        }

        if ($filter === 'participated') {
            $query->having('total_predictions', '>', 0);
        } elseif ($filter === 'not_participated') {
            $query->having('total_predictions', '=', 0);
        }

        $query->orderByDesc('total_predictions')->orderBy('users.name');

        $data = $query->get()->map(fn($u) => [
            'name'                 => $u->name,
            'unique_code'          => $u->unique_code,
            'mobile'               => $u->mobile,
            'email'                => $u->email,
            'status'               => $u->status ? 'Active' : 'Inactive',
            'matches_participated' => (int) $u->matches_participated,
            'total_predictions'    => (int) $u->total_predictions,
            'total_points'         => (int) $u->total_points,
            'has_participated'     => (int) $u->total_predictions > 0,
        ]);

        $totalUsers          = User::where('role', 'user')->count();
        $participatedCount   = $data->where('has_participated', true)->count();
        $notParticipated     = $totalUsers - $participatedCount;

        return response()->json([
            'status' => 'success',
            'data'   => $data,
            'summary' => [
                'total'            => $totalUsers,
                'participated'     => $participatedCount,
                'not_participated' => $notParticipated,
            ],
        ]);
    }

    public function predictionsDetail(Request $request)
    {
        $search   = $request->input('search', '');
        $matchId  = $request->input('match_id');
        $perPage  = (int) ($request->input('per_page', 50));

        $query = Prediction::with(['user', 'question', 'match.team1', 'match.team2'])
            ->when($matchId, fn($q) => $q->where('match_id', $matchId))
            ->when($search, function ($q) use ($search) {
                $q->whereHas('user', function ($uq) use ($search) {
                    $uq->where('name', 'like', "%$search%")
                       ->orWhere('unique_code', 'like', "%$search%");
                });
            })
            ->orderByDesc('created_at');

        $paginated = $query->paginate($perPage);

        $data = collect($paginated->items())->map(fn($p) => [
            'id'              => $p->id,
            'user_name'       => $p->user ? $p->user->name : '—',
            'user_code'       => $p->user ? $p->user->unique_code : '—',
            'match'           => $p->match
                ? ($p->match->team1 ? $p->match->team1->name : '?') . ' vs ' . ($p->match->team2 ? $p->match->team2->name : '?')
                : 'Championship',
            'question'        => $p->question ? $p->question->question_text : '—',
            'selected_answer' => $p->selected_answer,
            'is_correct'      => $p->is_correct,
            'points_earned'   => $p->points_earned,
            'created_at'      => $p->created_at ? $p->created_at->format('d/m/Y H:i') : '',
        ]);

        return response()->json([
            'status'      => 'success',
            'data'        => $data,
            'total'       => $paginated->total(),
            'current_page' => $paginated->currentPage(),
            'last_page'   => $paginated->lastPage(),
        ]);
    }

    public function dashboardStats()
    {
        $totalUsers       = User::where('role', 'user')->count();
        $totalMatches     = MatchGame::count();
        $liveMatches      = MatchGame::where('status', 'live')->count();
        $totalPredictions = Prediction::count();
        $topUser = User::select('users.id', 'users.name', 'users.unique_code')
            ->selectRaw('COALESCE(SUM(predictions.points_earned), 0) as total_points')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('users.role', 'user')
            ->groupBy('users.id', 'users.name', 'users.unique_code')
            ->orderByDesc('total_points')
            ->first();

        return response()->json([
            'status' => 'success',
            'data'   => [
                'total_users'       => $totalUsers,
                'total_matches'     => $totalMatches,
                'live_matches'      => $liveMatches,
                'total_predictions' => $totalPredictions,
                'top_user'          => $topUser,
            ],
        ]);
    }
}
