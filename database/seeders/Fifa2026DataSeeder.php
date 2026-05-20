<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Fifa2026DataSeeder extends Seeder
{
    public function run()
    {
        // Skip if teams already seeded
        if (DB::table('teams')->count() > 0) {
            $this->command->info('Teams already seeded. Skipping Fifa2026DataSeeder.');
            return;
        }

        $groups = [
            'A' => [
                ['Mexico',       'mx'],
                ['South Africa', 'za'],
                ['Korea Rep.',   'kr'],
                ['Czechia',      'cz'],
            ],
            'B' => [
                ['Canada',       'ca'],
                ['Bosnia & Hrz', 'ba'],
                ['Qatar',        'qa'],
                ['Switzerland',  'ch'],
            ],
            'C' => [
                ['Brazil',   'br'],
                ['Morocco',  'ma'],
                ['Haiti',    'ht'],
                ['Scotland', 'gb-sct'],
            ],
            'D' => [
                ['USA',       'us'],
                ['Paraguay',  'py'],
                ['Australia', 'au'],
                ['Türkiye',   'tr'],
            ],
            'E' => [
                ['Germany',     'de'],
                ['Curaçao',     'cw'],
                ['Ivory Coast', 'ci'],
                ['Ecuador',     'ec'],
            ],
            'F' => [
                ['Netherlands', 'nl'],
                ['Japan',       'jp'],
                ['Sweden',      'se'],
                ['Tunisia',     'tn'],
            ],
            'G' => [
                ['Belgium',     'be'],
                ['Egypt',       'eg'],
                ['Iran',        'ir'],
                ['New Zealand', 'nz'],
            ],
            'H' => [
                ['Spain',        'es'],
                ['Cape Verde',   'cv'],
                ['Saudi Arabia', 'sa'],
                ['Uruguay',      'uy'],
            ],
            'I' => [
                ['France',  'fr'],
                ['Senegal', 'sn'],
                ['Iraq',    'iq'],
                ['Norway',  'no'],
            ],
            'J' => [
                ['Argentina', 'ar'],
                ['Algeria',   'dz'],
                ['Austria',   'at'],
                ['Jordan',    'jo'],
            ],
            'K' => [
                ['Portugal',   'pt'],
                ['DR Congo',   'cd'],
                ['Uzbekistan', 'uz'],
                ['Colombia',   'co'],
            ],
            'L' => [
                ['England', 'gb-eng'],
                ['Croatia', 'hr'],
                ['Ghana',   'gh'],
                ['Panama',  'pa'],
            ],
        ];

        // Insert teams and collect IDs keyed by group letter
        $teamIds = [];
        foreach ($groups as $groupName => $teams) {
            $teamIds[$groupName] = [];
            foreach ($teams as [$name, $code]) {
                $teamIds[$groupName][] = DB::table('teams')->insertGetId([
                    'name'       => $name,
                    'group_name' => $groupName,
                    'flag_image' => "https://flagcdn.com/w40/{$code}.png",
                    'flag_emoji' => $code,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        // Group-stage match schedule
        // Each group: 6 matches across 3 rounds
        //   Round 1: team[0] vs team[1],  team[2] vs team[3]
        //   Round 2: team[0] vs team[2],  team[1] vs team[3]
        //   Round 3: team[0] vs team[3],  team[1] vs team[2]
        // Format: [date, time, t1_index, t2_index, round, venue]
        $schedule = [
            'A' => [
                ['2026-06-11', '21:00', 0, 1, 1, 'Estadio Azteca, Mexico City'],
                ['2026-06-12', '18:00', 2, 3, 1, 'AT&T Stadium, Dallas'],
                ['2026-06-19', '21:00', 0, 2, 2, 'Estadio Azteca, Mexico City'],
                ['2026-06-19', '18:00', 1, 3, 2, 'AT&T Stadium, Dallas'],
                ['2026-06-26', '21:00', 0, 3, 3, 'AT&T Stadium, Dallas'],
                ['2026-06-26', '21:00', 1, 2, 3, 'Estadio Akron, Guadalajara'],
            ],
            'B' => [
                ['2026-06-12', '21:00', 0, 1, 1, 'BC Place, Vancouver'],
                ['2026-06-13', '18:00', 2, 3, 1, "Levi's Stadium, San Jose"],
                ['2026-06-20', '21:00', 0, 2, 2, 'BMO Field, Toronto'],
                ['2026-06-20', '18:00', 1, 3, 2, 'Hard Rock Stadium, Miami'],
                ['2026-06-27', '21:00', 0, 3, 3, "Levi's Stadium, San Jose"],
                ['2026-06-27', '21:00', 1, 2, 3, 'BC Place, Vancouver'],
            ],
            'C' => [
                ['2026-06-13', '21:00', 0, 1, 1, 'SoFi Stadium, Los Angeles'],
                ['2026-06-14', '18:00', 2, 3, 1, 'Gillette Stadium, Boston'],
                ['2026-06-21', '21:00', 0, 2, 2, 'Arrowhead Stadium, Kansas City'],
                ['2026-06-21', '18:00', 1, 3, 2, 'SoFi Stadium, Los Angeles'],
                ['2026-06-28', '21:00', 0, 3, 3, 'Gillette Stadium, Boston'],
                ['2026-06-28', '21:00', 1, 2, 3, 'Arrowhead Stadium, Kansas City'],
            ],
            'D' => [
                ['2026-06-14', '21:00', 0, 1, 1, 'AT&T Stadium, Dallas'],
                ['2026-06-15', '18:00', 2, 3, 1, 'Lincoln Financial Field, Philadelphia'],
                ['2026-06-22', '21:00', 0, 2, 2, 'Allegiant Stadium, Las Vegas'],
                ['2026-06-22', '18:00', 1, 3, 2, 'AT&T Stadium, Dallas'],
                ['2026-06-29', '21:00', 0, 3, 3, 'Lincoln Financial Field, Philadelphia'],
                ['2026-06-29', '21:00', 1, 2, 3, 'Allegiant Stadium, Las Vegas'],
            ],
            'E' => [
                ['2026-06-15', '21:00', 0, 1, 1, 'MetLife Stadium, New Jersey'],
                ['2026-06-16', '18:00', 2, 3, 1, 'Bank of America Stadium, Charlotte'],
                ['2026-06-23', '21:00', 0, 2, 2, 'MetLife Stadium, New Jersey'],
                ['2026-06-23', '18:00', 1, 3, 2, 'Bank of America Stadium, Charlotte'],
                ['2026-06-30', '21:00', 0, 3, 3, 'MetLife Stadium, New Jersey'],
                ['2026-06-30', '21:00', 1, 2, 3, 'Arrowhead Stadium, Kansas City'],
            ],
            'F' => [
                ['2026-06-16', '21:00', 0, 1, 1, 'SoFi Stadium, Los Angeles'],
                ['2026-06-17', '18:00', 2, 3, 1, 'Hard Rock Stadium, Miami'],
                ['2026-06-24', '21:00', 0, 2, 2, 'SoFi Stadium, Los Angeles'],
                ['2026-06-24', '18:00', 1, 3, 2, 'Hard Rock Stadium, Miami'],
                ['2026-07-01', '21:00', 0, 3, 3, 'SoFi Stadium, Los Angeles'],
                ['2026-07-01', '21:00', 1, 2, 3, "Levi's Stadium, San Jose"],
            ],
            'G' => [
                ['2026-06-17', '21:00', 0, 1, 1, 'Allegiant Stadium, Las Vegas'],
                ['2026-06-18', '18:00', 2, 3, 1, 'Gillette Stadium, Boston'],
                ['2026-06-25', '21:00', 0, 2, 2, 'Lincoln Financial Field, Philadelphia'],
                ['2026-06-25', '18:00', 1, 3, 2, 'Allegiant Stadium, Las Vegas'],
                ['2026-07-02', '21:00', 0, 3, 3, 'Gillette Stadium, Boston'],
                ['2026-07-02', '21:00', 1, 2, 3, 'Lincoln Financial Field, Philadelphia'],
            ],
            'H' => [
                ['2026-06-18', '21:00', 0, 1, 1, 'BC Place, Vancouver'],
                ['2026-06-19', '12:00', 2, 3, 1, 'MetLife Stadium, New Jersey'],
                ['2026-06-25', '21:00', 0, 2, 2, 'BC Place, Vancouver'],
                ['2026-06-26', '18:00', 1, 3, 2, 'MetLife Stadium, New Jersey'],
                ['2026-07-02', '21:00', 0, 3, 3, 'BC Place, Vancouver'],
                ['2026-07-03', '21:00', 1, 2, 3, 'MetLife Stadium, New Jersey'],
            ],
            'I' => [
                ['2026-06-11', '18:00', 0, 1, 1, 'Hard Rock Stadium, Miami'],
                ['2026-06-12', '12:00', 2, 3, 1, 'Estadio BBVA, Monterrey'],
                ['2026-06-19', '18:00', 0, 2, 2, 'Bank of America Stadium, Charlotte'],
                ['2026-06-20', '12:00', 1, 3, 2, 'Hard Rock Stadium, Miami'],
                ['2026-06-26', '18:00', 0, 3, 3, 'Bank of America Stadium, Charlotte'],
                ['2026-06-27', '18:00', 1, 2, 3, 'Hard Rock Stadium, Miami'],
            ],
            'J' => [
                ['2026-06-12', '15:00', 0, 1, 1, 'MetLife Stadium, New Jersey'],
                ['2026-06-13', '12:00', 2, 3, 1, 'Arrowhead Stadium, Kansas City'],
                ['2026-06-20', '15:00', 0, 2, 2, 'AT&T Stadium, Dallas'],
                ['2026-06-21', '12:00', 1, 3, 2, 'MetLife Stadium, New Jersey'],
                ['2026-06-27', '18:00', 0, 3, 3, 'AT&T Stadium, Dallas'],
                ['2026-06-28', '18:00', 1, 2, 3, 'Arrowhead Stadium, Kansas City'],
            ],
            'K' => [
                ['2026-06-13', '15:00', 0, 1, 1, 'Hard Rock Stadium, Miami'],
                ['2026-06-14', '12:00', 2, 3, 1, 'Lincoln Financial Field, Philadelphia'],
                ['2026-06-21', '15:00', 0, 2, 2, 'Hard Rock Stadium, Miami'],
                ['2026-06-22', '12:00', 1, 3, 2, 'Lincoln Financial Field, Philadelphia'],
                ['2026-06-28', '18:00', 0, 3, 3, 'Hard Rock Stadium, Miami'],
                ['2026-06-29', '18:00', 1, 2, 3, 'Allegiant Stadium, Las Vegas'],
            ],
            'L' => [
                ['2026-06-14', '15:00', 0, 1, 1, 'Gillette Stadium, Boston'],
                ['2026-06-15', '12:00', 2, 3, 1, 'Bank of America Stadium, Charlotte'],
                ['2026-06-22', '15:00', 0, 2, 2, 'MetLife Stadium, New Jersey'],
                ['2026-06-23', '12:00', 1, 3, 2, 'Gillette Stadium, Boston'],
                ['2026-06-29', '18:00', 0, 3, 3, 'Bank of America Stadium, Charlotte'],
                ['2026-06-30', '18:00', 1, 2, 3, 'MetLife Stadium, New Jersey'],
            ],
        ];

        foreach ($schedule as $groupName => $matches) {
            $ids = $teamIds[$groupName];
            foreach ($matches as [$date, $time, $t1idx, $t2idx, $round, $venue]) {
                DB::table('match_games')->insert([
                    'group_name'   => $groupName,
                    'round_number' => $round,
                    'team1_id'     => $ids[$t1idx],
                    'team2_id'     => $ids[$t2idx],
                    'venue'        => $venue,
                    'match_date'   => $date,
                    'match_time'   => $time,
                    'status'       => 'upcoming',
                    'created_at'   => now(),
                    'updated_at'   => now(),
                ]);
            }
        }

        $this->command->info('FIFA 2026: seeded 48 teams and 72 group-stage matches.');
    }
}
