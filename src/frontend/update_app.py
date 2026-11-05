import os

app_path = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\App.jsx'

with open(app_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add Imports
imports = """
import AttendanceView from './components/dashboard/AttendanceView';
import MarksView from './components/dashboard/MarksView';
import NotificationsView from './components/dashboard/NotificationsView';
import ProfileView from './components/dashboard/ProfileView';
import LeaveManagement from './components/dashboard/LeaveManagement';
import AnalyticsView from './components/dashboard/AnalyticsView';
import SystemHealthView from './components/dashboard/SystemHealthView';
import TransportView from './components/dashboard/TransportView';
import ChildDetailsView from './components/dashboard/ChildDetailsView';
import DepartmentFaculty from './components/dashboard/DepartmentFaculty';
"""
content = content.replace("import SimpleView from './components/dashboard/SimpleView';", imports)

# Replace instances
replacements = {
    '<SimpleView title="Attendance Tracking" desc="Detailed biometric attendance logs." />': '<AttendanceView />',
    '<SimpleView title="Marks & Grades" desc="Semester grade cards and transcript generation." />': '<MarksView />',
    '<SimpleView title="Notification Center" desc="Global campus alerts and messages." />': '<NotificationsView />',
    '<SimpleView title="My Profile" desc="Student Profile details" />': '<ProfileView />',
    
    '<SimpleView title="Attendance Management" desc="Mark student attendance." />': '<AttendanceView />',
    '<SimpleView title="Academic Performance" desc="Class performance analytics." />': '<MarksView />',
    '<SimpleView title="Leave Management" desc="Apply for leave." />': '<LeaveManagement />',
    '<SimpleView title="Notification Center" desc="Faculty alerts." />': '<NotificationsView />',
    '<SimpleView title="My Profile" desc="Faculty Profile details" />': '<ProfileView />',
    
    '<SimpleView title="Department Faculty" desc="Manage department faculty." />': '<DepartmentFaculty />',
    '<SimpleView title="Department Analytics" desc="Department performance and trends." />': '<AnalyticsView />',
    '<SimpleView title="Faculty Leave" desc="Approve faculty leaves." />': '<LeaveManagement />',
    '<SimpleView title="Notification Center" desc="HOD alerts." />': '<NotificationsView />',
    '<SimpleView title="My Profile" desc="HOD Profile details" />': '<ProfileView />',
    
    '<SimpleView title="Transport" desc="Campus transport management." />': '<TransportView />',
    '<SimpleView title="Campus Analytics" desc="Overall campus metrics." />': '<AnalyticsView />',
    '<SimpleView title="Notification Center" desc="Admin alerts." />': '<NotificationsView />',
    '<SimpleView title="System Health" desc="Microservices health dashboard." />': '<SystemHealthView />',
    '<SimpleView title="My Profile" desc="Admin Profile details" />': '<ProfileView />',
    
    '<SimpleView title="My Child" desc="Child details." />': '<ChildDetailsView />',
    '<SimpleView title="Academic Progress" desc="Child\'s academic progress." />': '<MarksView />',
    '<SimpleView title="Notification Center" desc="Parent alerts." />': '<NotificationsView />',
    '<SimpleView title="My Profile" desc="Parent Profile details" />': '<ProfileView />'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(app_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("App.jsx updated with new components.")
