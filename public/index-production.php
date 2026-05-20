<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Absolute path to Laravel app root (above public_html)
define('APP_ROOT', '/home/abecababetisfifa/fifa2026');

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
