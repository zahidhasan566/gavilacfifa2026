<?php

/**
 * Root entry point for http://localhost/fifa2026/
 * Bootstraps Laravel from public/index.php while keeping /fifa2026/ as the base URL.
 */

// Force SCRIPT_NAME so Laravel uses /fifa2026 as base (not /fifa2026/public)
$_SERVER['SCRIPT_NAME'] = '/fifa2026/index.php';
$_SERVER['PHP_SELF']    = '/fifa2026/index.php';

require __DIR__ . '/public/index.php';
