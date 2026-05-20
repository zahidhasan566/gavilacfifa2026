@echo off
echo === Building for PRODUCTION (abecab-abetis-fifa.com) ===

REM Backup local env
copy .env .env.local.backup >nul
echo [OK] Local .env backed up to .env.local.backup

REM Switch to production env
copy .env.production .env >nul
echo [OK] Switched to production .env

REM Install dependencies (skip dev)
call npm install --production=false

REM Build production assets (minified)
call npm run production
echo [OK] Production assets built in public/js and public/css

REM Restore local env
copy .env.local.backup .env >nul
echo [OK] Local .env restored

echo.
echo === DONE! Upload the following to cPanel ===
echo   - All project files to: /home1/abecababetisfifa/fifa2026/
echo   - public/ folder contents to: /home1/abecababetisfifa/public_html/
echo   - Set .env on server to .env.production values
echo   - Run: php artisan migrate --force
echo   - Run: php artisan db:seed
echo   - Run: php artisan key:generate (if needed)
echo   - Run: php artisan jwt:secret (if needed)
echo.
pause
