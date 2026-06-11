@echo off
echo === FIFA 2026 — Build and Deploy ===

REM Verify local env exists
if not exist ".env.local" (
    echo [ERROR] .env.local not found! Create it from .env.local.example first.
    pause
    exit /b 1
)

REM Generate cache-busting version from current timestamp
for /f %%i in ('powershell -command "Get-Date -Format yyyyMMddHHmmss"') do set CACHE_VER=%%i
echo [0/5] Cache version: %CACHE_VER%

REM Inject new cache version into service worker so browsers clear old cached assets
powershell -Command "(Get-Content 'public\sw.production.js') -replace 'fifa2026-v[\w]+', 'fifa2026-v%CACHE_VER%' | Set-Content 'public\sw.production.js'"
echo [0/5] Service worker updated (all browsers will refresh)

REM Switch to production env for build
copy .env.production .env >nul
echo [1/5] Switched to production .env

REM Build production assets
call npm run production
if errorlevel 1 (
    echo [ERROR] Build failed! Restoring local .env...
    copy .env.local .env >nul
    pause
    exit /b 1
)
echo [2/5] Production assets built

REM Restore local env BEFORE committing so .env.production never goes into git
copy .env.local .env >nul
echo [3/5] Local .env restored

REM Commit and push production assets
git add -A
git status
set /p MSG="Enter commit message (or press Enter for 'deploy update'): "
if "%MSG%"=="" set MSG=deploy update
git commit -m "%MSG%"
if errorlevel 1 (
    echo [WARN] Nothing new to commit, pushing existing HEAD...
)

REM Pull any remote changes first to avoid push rejection
git pull --rebase origin master
if errorlevel 1 (
    echo [ERROR] Git rebase failed! Fix conflicts then run: git rebase --continue
    pause
    exit /b 1
)

git push origin master
if errorlevel 1 (
    echo [ERROR] Push failed! Check your connection or remote status.
    pause
    exit /b 1
)
echo [4/5] Pushed to GitHub

REM Rebuild for local development AFTER push so dev files never get committed
call npm run development
echo [5/5] Rebuilt for local dev — these files are NOT committed (that is correct)

echo.
echo === DONE! ===
echo    Production: https://gavilacfifa.com
echo    Local still works: http://localhost/gavilacfifa2026
echo    Cache version pushed: %CACHE_VER%
echo.
echo *** IMPORTANT: Go to cPanel ^> Git Version Control ^> gavilacfifa2026 ^> click DEPLOY ***
echo     Without this step the server will NOT update!
echo.
pause
