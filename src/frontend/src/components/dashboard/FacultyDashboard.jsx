import React, { useState, useEffect } from 'react';
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
