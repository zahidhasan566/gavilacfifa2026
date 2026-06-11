<?php

namespace App\Console\Commands;

use App\Models\MatchGame;
use App\Models\Notification;
use App\Models\RaffleDraw;
use App\Models\User;
use Illuminate\Console\Command;

class AutoRaffleDraw extends Command
{
    protected $signature   = 'raffle:auto {--dry-run : Show what would happen without saving}';
    protected $description = 'Auto-select 10 raffle winners per completed match';

    private const WINNERS_PER_MATCH = 10;

    public function handle(): int
    {
        $dryRun = $this->option('dry-run');

        $matches = MatchGame::where('status', 'completed')
            ->where('raffle_drawn', false)
            ->get();

        if ($matches->isEmpty()) {
            $this->info('No completed matches pending raffle draw.');
            return 0;
        }

        $this->info("Found {$matches->count()} match(es) pending raffle." . ($dryRun ? ' [DRY RUN]' : ''));

        foreach ($matches as $match) {
            $this->processMatch($match, $dryRun);
        }

        return 0;
    }

    private function processMatch(MatchGame $match, bool $dryRun): void
    {
        $team1 = $match->team1->name ?? "Team {$match->team1_id}";
        $team2 = $match->team2->name ?? "Team {$match->team2_id}";
        $label = "{$team1} vs {$team2} (match #{$match->id})";

        // Count draws already created for this match (handles partial failures gracefully)
        $alreadyDrawn = RaffleDraw::where('match_id', $match->id)->count();

        if ($alreadyDrawn >= self::WINNERS_PER_MATCH) {
            $match->update(['raffle_drawn' => true]);
            $this->warn("  [SKIP] {$label}: already has {$alreadyDrawn} winners.");
            return;
        }

        // Exclude users who are already winners for this match
        $alreadyWonIds = RaffleDraw::where('match_id', $match->id)->pluck('user_id');

        $eligible = User::select('users.id', 'users.name')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->where('predictions.match_id', $match->id)
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->whereNotIn('users.id', $alreadyWonIds)
            ->groupBy('users.id', 'users.name')
            ->get();

        if ($eligible->isEmpty()) {
            $this->warn("  [SKIP] {$label}: no eligible users with predictions.");
            if (!$dryRun) {
                $match->update(['raffle_drawn' => true]);
            }
            return;
        }

        $needed  = self::WINNERS_PER_MATCH - $alreadyDrawn;
        $winners = $eligible->shuffle()->take($needed);

        if ($dryRun) {
            $names = $winners->pluck('name')->implode(', ');
            $this->line("  [DRAW] {$label} → {$winners->count()} winners: {$names}");
            return;
        }

        foreach ($winners as $winner) {
            RaffleDraw::create([
                'user_id'      => $winner->id,
                'match_id'     => $match->id,
                'draw_date'    => now()->toDateString(),
                'notes'        => 'System auto-draw after match completion.',
                'prize_points' => 10,
                'is_auto'      => true,
            ]);

            Notification::create([
                'user_id' => $winner->id,
                'title'   => 'You won the Raffle Draw!',
                'message' => "Congratulations! You have been selected as a raffle draw winner for {$label}. You earned 10 bonus points!",
                'is_read' => false,
            ]);
        }

        $match->update(['raffle_drawn' => true]);

        $names = $winners->pluck('name')->implode(', ');
        $this->info("  [DONE] {$label} → {$winners->count()} winner(s): {$names}");
    }
}
