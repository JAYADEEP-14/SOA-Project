import React, { useState, useEffect } from 'react';
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
