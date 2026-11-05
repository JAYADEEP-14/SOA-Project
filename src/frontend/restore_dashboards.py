import os

dashboard_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components\dashboard'

faculty_code = """import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { Users, Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function FacultyDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard/faculty', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      setData({
        todaysClasses: 4,
        assignedStudents: 128,
        attendanceSummary: "82%",
        atRiskStudents: 12,
        pendingTasks: 3
      });
    });
  }, []);

  if (!data) return <div style={{padding:'2rem'}}>Loading Faculty Dashboard...</div>;

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{fontSize:'2rem', fontWeight:'bold', color:'var(--primary)'}}>Good Morning, Professor 👋</h1>
        <p className="subtitle" style={{color:'var(--text-muted)'}}>Here is your daily academic overview.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Calendar className="text-secondary"/> <h3 style={{fontSize:'1rem'}}>Today's Classes</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.todaysClasses}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Users className="text-accent"/> <h3 style={{fontSize:'1rem'}}>Students</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.assignedStudents}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Clock className="text-success"/> <h3 style={{fontSize:'1rem'}}>Attendance</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>{data.attendanceSummary}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><AlertTriangle className="text-danger"/> <h3 style={{fontSize:'1rem'}}>At-Risk Students</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--danger)'}}>{data.atRiskStudents}</p>
        </div>
      </div>
    </div>
  );
}
"""

student_code = """import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { BookOpen, Target, Activity, AlertTriangle, Zap } from 'lucide-react';

export default function StudentDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard/student', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      setData({
        overallAttendance: "78%",
        averageMarks: "82%",
        predictedScore: "82%",
        academicRisk: "GOOD",
        nextClass: "Database Management - 10:00 AM Room C204",
        aiInsight: "Your attendance in Operating Systems is 68%. Attend the next 4 classes to reach approximately 75%."
      });
    });
  }, []);

  if (!data) return <div style={{padding:'2rem'}}>Loading Student Dashboard...</div>;

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{fontSize:'2rem', fontWeight:'bold', color:'var(--primary)'}}>Good Morning, Student 👋</h1>
        <p className="subtitle" style={{color:'var(--text-muted)'}}>Here is your academic progress.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Activity className="text-secondary"/> <h3 style={{fontSize:'1rem'}}>Overall Attendance</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.overallAttendance}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><BookOpen className="text-accent"/> <h3 style={{fontSize:'1rem'}}>Average Marks</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.averageMarks}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Target className="text-success"/> <h3 style={{fontSize:'1rem'}}>Predicted Score</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>{data.predictedScore}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><AlertTriangle className="text-success"/> <h3 style={{fontSize:'1rem'}}>Academic Risk</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>{data.academicRisk}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6" style={{marginTop:'1.5rem'}}>
        <div className="card">
          <h3 style={{marginBottom:'1rem', fontSize:'1.2rem'}}>Next Class</h3>
          <p style={{color:'var(--text-muted)'}}>{data.nextClass}</p>
        </div>
        <div className="card ai-glow" style={{background:'var(--grad-primary)', color:'white'}}>
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}>
             <Zap size={20} />
             <h3 style={{fontSize:'1.2rem'}}>AI Insight</h3>
          </div>
          <p style={{color:'rgba(255,255,255,0.9)'}}>{data.aiInsight}</p>
        </div>
      </div>
    </div>
  );
}
"""

admin_code = """import React, { useState, useEffect } from 'react';
import './AdminCommandCenter.css';
import { Users, Shield, Server, Activity } from 'lucide-react';

export default function AdminCommandCenter() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard/admin', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      setData({
        totalStudents: 5000,
        totalFaculty: 300,
        totalHods: 15,
        totalParents: 4500,
        activeEvents: 12,
        infrastructureAlerts: 2
      });
    });
  }, []);

  if (!data) return <div style={{padding:'2rem'}}>Loading Admin Command Center...</div>;

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{fontSize:'2rem', fontWeight:'bold', color:'var(--primary)'}}>Campus Command Center 🚀</h1>
        <p className="subtitle" style={{color:'var(--text-muted)'}}>High-level university metrics and system health.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Users className="text-secondary"/> <h3 style={{fontSize:'1rem'}}>Total Students</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.totalStudents}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Shield className="text-accent"/> <h3 style={{fontSize:'1rem'}}>Total Faculty</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.totalFaculty}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Activity className="text-success"/> <h3 style={{fontSize:'1rem'}}>Active Events</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>{data.activeEvents}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Server className="text-danger"/> <h3 style={{fontSize:'1rem'}}>Infra Alerts</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--danger)'}}>{data.infrastructureAlerts}</p>
        </div>
      </div>
    </div>
  );
}
"""

hod_code = """import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { Users, Briefcase, Activity, AlertTriangle } from 'lucide-react';

export default function HodDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard/hod', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      setData({
        departmentStudents: 450,
        departmentFaculty: 32,
        averageAttendance: "81%",
        atRiskStudents: 27
      });
    });
  }, []);

  if (!data) return <div style={{padding:'2rem'}}>Loading HOD Dashboard...</div>;

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{fontSize:'2rem', fontWeight:'bold', color:'var(--primary)'}}>Department Overview 🏛️</h1>
        <p className="subtitle" style={{color:'var(--text-muted)'}}>Key metrics for your department.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Users className="text-secondary"/> <h3 style={{fontSize:'1rem'}}>Total Students</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.departmentStudents}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Briefcase className="text-accent"/> <h3 style={{fontSize:'1rem'}}>Total Faculty</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.departmentFaculty}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Activity className="text-success"/> <h3 style={{fontSize:'1rem'}}>Average Attendance</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>{data.averageAttendance}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><AlertTriangle className="text-danger"/> <h3 style={{fontSize:'1rem'}}>At-Risk Students</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--danger)'}}>{data.atRiskStudents}</p>
        </div>
      </div>
    </div>
  );
}
"""

parent_code = """import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { User, Activity, Target, Calendar } from 'lucide-react';

export default function ParentDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/dashboard/parent', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .catch(err => {
      console.error(err);
      setData({
        childName: "John Doe",
        attendance: "78%",
        predictedScore: "82%",
        academicRisk: "GOOD",
        upcomingExam: "Database Management Exam - September 10"
      });
    });
  }, []);

  if (!data) return <div style={{padding:'2rem'}}>Loading Parent Dashboard...</div>;

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1 style={{fontSize:'2rem', fontWeight:'bold', color:'var(--primary)'}}>Parent Portal 👨‍👩‍👧</h1>
        <p className="subtitle" style={{color:'var(--text-muted)'}}>Academic overview for {data.childName}.</p>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Activity className="text-secondary"/> <h3 style={{fontSize:'1rem'}}>Attendance</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.attendance}</p>
        </div>
        <div className="card">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Target className="text-accent"/> <h3 style={{fontSize:'1rem'}}>Predicted Score</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>{data.predictedScore}</p>
        </div>
        <div className="card col-span-2">
          <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}><Calendar className="text-warning"/> <h3 style={{fontSize:'1rem'}}>Upcoming Exam</h3></div>
          <p style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--text-main)'}}>{data.upcomingExam}</p>
        </div>
      </div>
    </div>
  );
}
"""

with open(os.path.join(dashboard_dir, 'FacultyDashboard.jsx'), 'w', encoding='utf-8') as f:
    f.write(faculty_code)
with open(os.path.join(dashboard_dir, 'StudentDashboard.jsx'), 'w', encoding='utf-8') as f:
    f.write(student_code)
with open(os.path.join(dashboard_dir, 'AdminCommandCenter.jsx'), 'w', encoding='utf-8') as f:
    f.write(admin_code)
with open(os.path.join(dashboard_dir, 'HodDashboard.jsx'), 'w', encoding='utf-8') as f:
    f.write(hod_code)
with open(os.path.join(dashboard_dir, 'ParentDashboard.jsx'), 'w', encoding='utf-8') as f:
    f.write(parent_code)

print("Restored styling for all dashboards")
