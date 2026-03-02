Write-Host 'Starting CollegeEventHub Full Stack Application...' -ForegroundColor Green
Write-Host ''
Write-Host 'Make sure you have Java, Maven, and Node.js installed' -ForegroundColor Yellow
Write-Host ''

Write-Host 'Starting Backend Server...' -ForegroundColor Cyan
Start-Process -FilePath 'cmd' -ArgumentList '/k', 'cd /d "d:\laptop data\core project\College-Event-Hub\Backend" && mvn spring-boot:run'

Start-Sleep -Seconds 5

Write-Host 'Starting Frontend Client...' -ForegroundColor Cyan
Start-Process -FilePath 'cmd' -ArgumentList '/k', 'cd /d "d:\laptop data\core project\College-Event-Hub\Frontend" && npm install && npm run dev'

Write-Host ''
Write-Host 'Applications are starting...' -ForegroundColor Green
Write-Host 'Backend: http://localhost:8080' -ForegroundColor White
Write-Host 'Frontend: http://localhost:5173' -ForegroundColor White

Read-Host 'Press Enter to exit'
