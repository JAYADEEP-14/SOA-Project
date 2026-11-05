import React, { useState, useEffect } from 'react';
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
