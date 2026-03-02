@echo off
echo Starting CollegeEventHub Backend Server...
echo.
echo Make sure you have Java and Maven installed
echo.
cd /d "d:\laptop data\core project\College-Event-Hub\Backend"
echo Current directory: %cd%
echo.
echo Installing dependencies and building project...
mvn clean install -DskipTests
echo.
echo Starting CollegeEventHub Spring Boot server...
mvn spring-boot:run
pause
