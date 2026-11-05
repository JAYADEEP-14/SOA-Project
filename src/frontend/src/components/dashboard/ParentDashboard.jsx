import React, { useState, useEffect } from 'react';
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
