import os

dashboard_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components\dashboard'

replacements = {
    'StudentDashboard.jsx': """    .catch(err => {
      console.error(err);
      setData({
        overallAttendance: "78%",
        averageMarks: "82%",
        predictedScore: "82%",
        academicRisk: "GOOD",
        nextClass: "Database Management - 10:00 AM Room C204",
        aiInsight: "Your attendance in Operating Systems is 68%. Attend the next 4 classes to reach approximately 75%."
      });
    });""",
    'FacultyDashboard.jsx': """    .catch(err => {
      console.error(err);
      setData({
        todaysClasses: 4,
        assignedStudents: 128,
        attendanceSummary: "82%",
        atRiskStudents: 12,
        pendingTasks: 3
      });
    });""",
    'HodDashboard.jsx': """    .catch(err => {
      console.error(err);
      setData({
        departmentStudents: 450,
        departmentFaculty: 32,
        averageAttendance: "81%",
        atRiskStudents: 27
      });
    });""",
    'AdminCommandCenter.jsx': """    .catch(err => {
      console.error(err);
      setData({
        totalStudents: 5000,
        totalFaculty: 300,
        totalHods: 15,
        totalParents: 4500,
        activeEvents: 12,
        infrastructureAlerts: 2
      });
    });""",
    'ParentDashboard.jsx': """    .catch(err => {
      console.error(err);
      setData({
        childName: "John Doe",
        attendance: "78%",
        predictedScore: "82%",
        academicRisk: "GOOD",
        upcomingExam: "Database Management Exam - September 10"
      });
    });"""
}

for filename, catch_block in replacements.items():
    path = os.path.join(dashboard_dir, filename)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the catch block
        content = content.replace(".catch(err => console.error(err));", catch_block)
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

print("Dashboards updated with mock fallbacks.")
