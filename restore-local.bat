@echo off
echo === Restoring LOCAL development environment ===

if exist .env.local.backup (
    copy .env.local.backup .env >nul
    echo [OK] Local .env restored from backup
) else (
    echo [WARN] No backup found. Your .env is unchanged.
)

call npm run dev
echo [OK] Local assets rebuilt

pause
