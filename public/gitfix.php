<?php
if (!isset($_GET['key']) || $_GET['key'] !== 'fifa2026fix') {
    die('Access denied. Use: ?key=fifa2026fix');
}

$repo    = '/home/gavilacfifa/gavilacfifa2026';
$pubdest = '/home/gavilacfifa/public_html';

echo '<pre style="background:#111;color:#0f0;padding:20px;font-size:13px;font-family:monospace;">';
echo "=== FIFA 2026 Full Deploy ===\n\n";

function run($cmd) {
    echo "▶ $cmd\n";
    $out = shell_exec($cmd . ' 2>&1');
    echo ($out ?: "  (no output)") . "\n\n";
}

// Step 1 — sync git repo with latest GitHub push
echo "--- Step 1: Git sync ---\n";
run("git -C $repo fetch origin");
run("git -C $repo reset --hard origin/master");
run("git -C $repo clean -fd");
run("git -C $repo status");

// Step 2 — ensure dirs exist
echo "--- Step 2: Ensure dirs ---\n";
run("mkdir -p $repo/storage/framework/cache");
run("mkdir -p $repo/storage/framework/sessions");
run("mkdir -p $repo/storage/framework/views");
run("mkdir -p $repo/storage/app/public");
run("mkdir -p $repo/bootstrap/cache");

// Step 3 — copy assets to public_html
echo "--- Step 3: Copy assets to public_html ---\n";
run("/bin/cp -f $repo/public/index-production.php $pubdest/index.php");
run("/bin/cp -f $repo/public/htaccess.production $pubdest/.htaccess");
run("/bin/cp -rf $repo/public/css $pubdest/");
run("/bin/cp -rf $repo/public/js $pubdest/");
run("/bin/cp -rf $repo/public/images $pubdest/");
run("/bin/cp -f $repo/public/manifest.production.json $pubdest/manifest.json");
run("/bin/cp -f $repo/public/sw.production.js $pubdest/sw.js");

// Step 4 — fix permissions
echo "--- Step 4: Permissions ---\n";
run("mkdir -p $pubdest/images/profiles");
run("chmod -R 775 $pubdest/images/profiles");
run("chmod -R 775 $repo/storage");
run("chmod -R 775 $repo/bootstrap/cache");

// Step 5 — run migrations
echo "--- Step 5: Migrations ---\n";
run("/usr/local/bin/php $repo/artisan migrate --force");

// Step 6 — clear Laravel caches
echo "--- Step 6: Clear caches ---\n";
run("/usr/local/bin/php $repo/artisan config:clear");
run("/usr/local/bin/php $repo/artisan cache:clear");
run("/usr/local/bin/php $repo/artisan view:clear");

echo "=== DEPLOY COMPLETE ===\n";
echo "Site: https://gavilacfifa.com\n";
echo '</pre>';
