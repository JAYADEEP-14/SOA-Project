import urllib.request
import json

endpoints = [
    ("Prediction Service", "http://localhost:8000/predict/student-performance", {"student_id":1, "attendance_rate":0.5, "assignment_score":40, "exam_score":50}),
    ("Agent Service", "http://localhost:8001/agent/chat", {"prompt":"predict"})
]

def run_tests():
    print("Running System Integration Tests...")
    for name, url, data in endpoints:
        print(f"\nTesting {name}...")
        try:
            req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})
            with urllib.request.urlopen(req, timeout=5) as response:
                result = response.read().decode()
                print(f"[PASS] {name} responded: {result[:50]}...")
        except Exception as e:
            print(f"[FAIL] {name} failed: {str(e)}")

if __name__ == "__main__":
    run_tests()
