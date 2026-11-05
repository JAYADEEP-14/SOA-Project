import urllib.request
import json
import time

services = {
    'Gateway': 8080,
    'Auth': 8081,
    'Student': 8082,
    'Faculty': 8083,
    'Academic': 8084,
    'Classroom': 8085,
    'Attendance': 8086,
    'Resource': 8087,
    'Transport': 8088,
    'Event': 8089,
    'Infrastructure': 8090,
    'Notification': 8091
}

def check_health():
    print(f"\n--- Health Check Report at {time.strftime('%X')} ---")
    for name, port in services.items():
        url = f"http://localhost:{port}/actuator/health"
        try:
            req = urllib.request.Request(url)
            with urllib.request.urlopen(req, timeout=2) as response:
                data = json.loads(response.read().decode())
                status = data.get('status', 'UNKNOWN')
                print(f"[{'OK' if status == 'UP' else 'FAIL'}] {name} Service (Port {port}) - Status: {status}")
        except Exception as e:
            print(f"[DOWN] {name} Service (Port {port}) - Unreachable")

if __name__ == "__main__":
    check_health()
