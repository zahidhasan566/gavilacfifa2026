<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Absolute path to Laravel app root (above public_html)
define('APP_ROOT', '/home/abecababetisfifa/fifa2026');

// Dev-build compatibility: strip /fifa2026 prefix from all requests
// The dev build has MIX_APP_BASE=/fifa2026 baked in for API calls and routes
if (!empty($_SERVER['REQUEST_URI']) && strpos($_SERVER['REQUEST_URI'], '/fifa2026') === 0) {
    $_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], strlen('/fifa2026')) ?: '/';
    if (!empty($_SERVER['PATH_INFO'])) {
        $_SERVER['PATH_INFO'] = substr($_SERVER['PATH_INFO'], strlen('/fifa2026')) ?: '/';
    }
}

if (file_exists($maintenance = APP_ROOT.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

require APP_ROOT.'/vendor/autoload.php';

$app = require_once APP_ROOT.'/bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);
