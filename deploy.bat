@echo off
echo === FIFA 2026 — Build and Deploy ===

REM Backup local env
copy .env .env.local.backup >nul
echo [1/6] Local .env backed up

REM Switch to production env for build
copy .env.production .env >nul
echo [2/6] Switched to production .env

REM Build production assets
call npm run production
if errorlevel 1 (
    echo [ERROR] Build failed! Restoring local .env...
    copy .env.local.backup .env >nul
    pause
    exit /b 1
)
echo [3/6] Production assets built

REM Commit and push to GitHub BEFORE restoring local env
git add -A
git status
set /p MSG="Enter commit message (or press Enter for 'deploy update'): "
if "%MSG%"=="" set MSG=deploy update
git commit -m "%MSG%"
git push origin master
echo [4/6] Pushed to GitHub

REM Restore local env
copy .env.local.backup .env >nul
echo [5/6] Local .env restored

REM Rebuild for local development so localhost still works
call npm run development
echo [6/6] Rebuilt for local development

echo.
echo === DONE! ===
echo    Production: https://abecab-abetis-fifa.com
echo    Local still works: http://localhost/fifa2026
echo.
pause
