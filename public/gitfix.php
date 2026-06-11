<?php
if (!isset($_GET['key']) || $_GET['key'] !== 'fifa2026fix') {
    die('Access denied. Use: ?key=fifa2026fix');
}

$repo = '/home/gavilacfifa/gavilacfifa2026';

echo '<pre style="background:#111;color:#0f0;padding:20px;font-size:13px;">';
echo "=== Git Reset ===\n\n";

$commands = [
    "git -C $repo reset --hard HEAD",
    "git -C $repo clean -fd",
    "git -C $repo status",
];

foreach ($commands as $cmd) {
    echo "▶ $cmd\n";
    $output = shell_exec($cmd . ' 2>&1');
    echo $output ?: "  (no output)\n";
    echo "\n";
}

echo "=== DONE — now click Deploy HEAD Commit in cPanel ===\n";
echo '</pre>';
