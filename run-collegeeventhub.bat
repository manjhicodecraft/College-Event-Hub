@echo off
echo Starting CollegeEventHub Full Stack Application...
echo.
echo Make sure you have Java, Maven, and Node.js installed
echo.
echo Starting Backend Server...
start powershell -WindowStyle Hidden -Command "cd 'd:\laptop data\core project\College-Event-Hub\Backend'; mvn clean install -DskipTests; mvn spring-boot:run"
timeout /t 8 /nobreak >nul
echo.
echo Starting Frontend Client...
start powershell -WindowStyle Hidden -Command "cd 'd:\laptop data\core project\College-Event-Hub\Frontend'; npm install; npm run dev"
echo.
echo Applications are starting...
echo Backend: http://localhost:8080
echo Frontend: http://localhost:5173
echo.
pause
