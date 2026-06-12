<?php
if (!isset($_GET['key']) || $_GET['key'] !== 'fifa2026fix') {
    http_response_code(403);
    die('Access denied.');
}

$repo    = '/home/gavilacfifa/gavilacfifa2026';
$pubdest = '/home/gavilacfifa/public_html';
$php     = '/usr/local/bin/php';

header('Content-Type: text/plain; charset=utf-8');

function run(string $cmd): void {
    $out = shell_exec($cmd . ' 2>&1');
    echo "▶ $cmd\n" . ($out ?: "  (no output)") . "\n";
    flush();
}

echo "=== FIFA 2026 Deploy: " . date('Y-m-d H:i:s') . " ===\n\n";

// 1. Put site into maintenance mode so users see a clean 503 during deploy
echo "--- Maintenance ON ---\n";
run("$php $repo/artisan down --retry=10");

// 2. Sync git repo with latest push
echo "\n--- Git sync ---\n";
run("git -C $repo fetch origin");
run("git -C $repo reset --hard origin/master");
run("git -C $repo clean -fd");

// 3. Ensure required dirs exist
echo "\n--- Dirs ---\n";
run("mkdir -p $repo/storage/framework/cache $repo/storage/framework/sessions $repo/storage/framework/views $repo/storage/app/public $repo/bootstrap/cache");

// 4. Copy built assets to public_html
echo "\n--- Copy assets ---\n";
run("/bin/cp -f  $repo/public/index-production.php $pubdest/index.php");
run("/bin/cp -f  $repo/public/htaccess.production  $pubdest/.htaccess");
run("/bin/cp -rf $repo/public/css                  $pubdest/");
run("/bin/cp -rf $repo/public/js                   $pubdest/");
run("/bin/cp -rf $repo/public/images               $pubdest/");
run("/bin/cp -f  $repo/public/manifest.production.json $pubdest/manifest.json");
run("/bin/cp -f  $repo/public/sw.production.js     $pubdest/sw.js");

// 5. Permissions
echo "\n--- Permissions ---\n";
run("mkdir -p $pubdest/images/profiles && chmod -R 775 $pubdest/images/profiles");
run("chmod -R 775 $repo/storage $repo/bootstrap/cache");

// 6. Migrate
echo "\n--- Migrate ---\n";
run("$php $repo/artisan migrate --force");

// 7. Rebuild caches (cache then up so app is warm before going live)
echo "\n--- Cache rebuild ---\n";
run("$php $repo/artisan config:cache");
run("$php $repo/artisan route:cache");
run("$php $repo/artisan view:clear");
run("$php $repo/artisan cache:clear");

// 8. Bring site back online
echo "\n--- Maintenance OFF ---\n";
run("$php $repo/artisan up");

echo "\n=== DONE: " . date('H:i:s') . " — https://gavilacfifa.com ===\n";
