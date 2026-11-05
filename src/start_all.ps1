$basePath = (Get-Item -Path ".\").FullName

# Services to start
$backendServices = @(
    "api-gateway", "auth-service", "student-service", "faculty-service",
    "academic-service", "classroom-service", "attendance-service", 
    "resource-service", "transport-service", "event-service", 
    "infrastructure-service", "notification-service", "dashboard-service"
)

# Start Backend Services
Write-Host "Starting Backend Services..."
foreach ($service in $backendServices) {
    Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd backend; ..\apache-maven-3.9.9\bin\mvn.cmd spring-boot:run -pl $service"
}

# Start Frontend
Write-Host "Starting Frontend..."
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd frontend; npm install; npm run dev"

# Start Python Services
Write-Host "Starting Python Services..."
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd python-services; python -m venv venv; .\venv\Scripts\activate; pip install -r requirements.txt; python main.py"

Write-Host "All services started in new windows."
