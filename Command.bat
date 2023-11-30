@ECHO off
ECHO ===============
ECHO GIT Command 
ECHO ===============
FOR /F "tokens=*" %%a IN ('DATE /T') DO SET arg1=%%a
git add . & git commit -m %arg1% & git push origin master & git status
PAUSE