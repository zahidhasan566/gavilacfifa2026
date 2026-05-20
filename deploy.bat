@echo off
echo === FIFA 2026 — Build and Deploy ===

REM Backup local env
copy .env .env.local.backup >nul
echo [1/5] Local .env backed up

REM Switch to production env for build
copy .env.production .env >nul
echo [2/5] Switched to production .env

REM Build production assets
call npm run production
if errorlevel 1 (
    echo [ERROR] Build failed! Restoring local .env...
    copy .env.local.backup .env >nul
    pause
    exit /b 1
)
echo [3/5] Production assets built

REM Restore local env
copy .env.local.backup .env >nul
echo [4/5] Local .env restored

REM Commit and push to GitHub
git add -A
git status
set /p MSG="Enter commit message (or press Enter for 'deploy update'): "
if "%MSG%"=="" set MSG=deploy update
git commit -m "%MSG%"
git push origin master
echo [5/5] Pushed to GitHub

echo.
echo === DONE! cPanel will auto-deploy in ~1 minute ===
echo    Check: https://abecab-abetis-fifa.com
echo.
pause
