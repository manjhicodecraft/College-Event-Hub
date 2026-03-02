@echo off
echo Starting CollegeEventHub Frontend...
echo.
echo Make sure you have Node.js installed
echo.
cd /d "d:\laptop data\core project\College-Event-Hub\Frontend"
echo Current directory: %cd%
echo.
echo Installing dependencies if needed...
npm install
echo.
echo Starting CollegeEventHub frontend...
npm run dev
pause
