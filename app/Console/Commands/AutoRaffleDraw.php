<?php

namespace App\Console\Commands;

use App\Models\MatchGame;
use App\Models\Notification;
use App\Models\Prediction;
use App\Models\Question;
use App\Models\RaffleDraw;
use App\Models\User;
use Illuminate\Console\Command;

class AutoRaffleDraw extends Command
{
    protected $signature   = 'raffle:auto {--dry-run : Show what would happen without saving}';
    protected $description = 'Auto-select up to 10 raffle winners per completed, scored match';

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

        // Auto-score predictions if the match has scores but scoring hasn't run yet
        $scoredCount = Prediction::where('match_id', $match->id)
            ->whereNotNull('is_correct')
            ->count();

        if ($scoredCount === 0) {
            if ($match->team1_score === null || $match->team2_score === null) {
                $this->warn("  [WAIT] {$label}: no scores recorded yet, will retry.");
                return;
            }
            $this->info("  [SCORE] {$label}: auto-scoring predictions...");
            if (!$dryRun) {
                $this->autoScore($match);
                $scoredCount = Prediction::where('match_id', $match->id)->whereNotNull('is_correct')->count();
                $this->info("  [SCORE] {$label}: scored {$scoredCount} predictions.");
            }
        }

        // Count draws already created for this match (handles partial draws gracefully)
        $alreadyDrawn = RaffleDraw::where('match_id', $match->id)->count();

        if ($alreadyDrawn >= self::WINNERS_PER_MATCH) {
            $match->update(['raffle_drawn' => true]);
            $this->warn("  [SKIP] {$label}: already has {$alreadyDrawn} winners.");
            return;
        }

        // Exclude users already drawn for this match
        $alreadyWonIds = RaffleDraw::where('match_id', $match->id)->pluck('user_id');

        // Only users who correctly predicted the match winner (team_choice question).
        // Correct answers on other (e.g. template/bonus) questions do NOT qualify.
        $eligible = User::select('users.id', 'users.name')
            ->join('predictions', 'users.id', '=', 'predictions.user_id')
            ->join('questions', 'predictions.question_id', '=', 'questions.id')
            ->where('predictions.match_id', $match->id)
            ->where('predictions.is_correct', true)
            ->where('questions.type', 'team_choice')
            ->where('users.role', 'user')
            ->where('users.status', 1)
            ->whereNotIn('users.id', $alreadyWonIds)
            ->groupBy('users.id', 'users.name')
            ->get();

        if ($eligible->isEmpty()) {
            // Scoring ran but nobody got any answer right — close the draw
            $this->warn("  [SKIP] {$label}: no users with correct predictions.");
            if (!$dryRun) {
                $match->update(['raffle_drawn' => true]);
            }
            return;
        }

        // Randomly pick up to 10 from correct predictors
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

    private function autoScore(MatchGame $match): void
    {
        $t1 = $match->team1_score;
        $t2 = $match->team2_score;

        if ($t1 > $t2) {
            $winner = $match->team1->name ?? null;
        } elseif ($t2 > $t1) {
            $winner = $match->team2->name ?? null;
        } else {
            $winner = 'Draw';
        }

        $scoreStr = "{$t1}-{$t2}";

        $questions = Question::where(function ($q) use ($match) {
            $q->where('match_id', $match->id)->orWhere('is_template', true);
        })->get();

        foreach ($questions as $question) {
            if ($question->type === 'team_choice') {
                $question->update(['correct_answer' => $winner]);
                continue;
            }
            if ($question->type === 'text' && !$question->correct_answer) {
                $lower = strtolower($question->question_text);
                if (str_contains($lower, 'score') || str_contains($lower, 'result') || str_contains($lower, 'goals')) {
                    $question->update(['correct_answer' => $scoreStr]);
                }
            }
        }

        $questions = Question::where(function ($q) use ($match) {
            $q->where('match_id', $match->id)->orWhere('is_template', true);
        })->where('is_active', true)->get();

        foreach ($questions as $question) {
            if (!$question->correct_answer) continue;
            $pts = ($question->type === 'team_choice' && $question->points == 0) ? 10 : $question->points;
            $predictions = Prediction::where('match_id', $match->id)
                ->where('question_id', $question->id)
                ->get();
            foreach ($predictions as $prediction) {
                $isCorrect = strtolower(trim($prediction->selected_answer)) === strtolower(trim($question->correct_answer));
                $prediction->update([
                    'is_correct'    => $isCorrect,
                    'points_earned' => $isCorrect ? $pts : 0,
                ]);
            }
        }
    }
}
