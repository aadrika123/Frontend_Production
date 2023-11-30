@echo off

echo ================
echo GIT PUSH COMMAND
echo ================

echo.

for /f "tokens=*" %%a in ('DATE /t') do set currentDate=%%a

git add . & git commit -m "%currentDate%" & git push origin master & git status

echo.

timeout /t 5 /nobreak