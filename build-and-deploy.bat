@echo off
setlocal
cd /d "%~dp0"

echo Building JDLauncher...
call npm install
if errorlevel 1 goto fail

call npm run build
if errorlevel 1 goto fail

echo.
echo Committing and pushing to GitHub. Cloudflare Pages will deploy automatically if the Pages project is connected to this repo.
git status --short
echo.
set /p COMMIT_MESSAGE=Commit message [Update launcher]: 
if "%COMMIT_MESSAGE%"=="" set COMMIT_MESSAGE=Update launcher

git add .
git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 echo No commit was created. Continuing to push in case there are existing commits to send.

git push origin main
if errorlevel 1 goto fail

echo.
echo Done. Cloudflare Pages will deploy from the GitHub push.
pause
exit /b 0

:fail
echo.
echo Build or deploy failed. Check the message above.
pause
exit /b 1
