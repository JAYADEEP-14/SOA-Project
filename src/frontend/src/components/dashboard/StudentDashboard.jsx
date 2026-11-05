import React, { useState, useEffect } from 'react';
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
