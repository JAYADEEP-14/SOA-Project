import React from 'react';
import { Users, BookOpen, Activity, Target, AlertTriangle, TrendingUp, BarChart, BrainCircuit } from 'lucide-react';

export default function FacultyPerformanceView() {
  const subjects = [
    { name: 'Database Management Systems', avgMarks: '82%', avgAttendance: '85%', atRisk: 4 },
    { name: 'Operating Systems', avgMarks: '76%', avgAttendance: '79%', atRisk: 8 },
    { name: 'Machine Learning', avgMarks: '88%', avgAttendance: '92%', atRisk: 0 },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Teaching & Student Performance</h1>
        <p className="subtitle">Analytics on your subjects and student metrics.</p>
      </div>

      <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><Users className="text-secondary"/> <h3>Students Taught</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>128</p>
        </div>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><BookOpen className="text-accent"/> <h3>Subjects Taught</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>3</p>
        </div>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><Activity className="text-success"/> <h3>Avg Attendance</h3></div>
          <p style={{fontSize:'2.5rem', fontWeight:'bold', color:'var(--success)'}}>85%</p>
        </div>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><Target className="text-secondary"/> <h3>Avg Marks</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>82%</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', display:'flex', gap:'0.5rem', alignItems:'center' }}>
            <TrendingUp size={18} className="text-accent" /> Attendance Trends
          </h3>
          <p style={{ color: 'var(--text-muted)' }}>Attendance is up 4% compared to last month. Peak attendance is observed on Tuesdays.</p>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', display:'flex', gap:'0.5rem', alignItems:'center' }}>
            <BarChart size={18} className="text-secondary" /> Performance Trends
          </h3>
          <p style={{ color: 'var(--text-muted)' }}>Average marks improved by 6% since the first midterm. Operating Systems needs more focus.</p>
        </div>
      </div>

      <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Subject-Wise Analytics</h2>
      <div className="grid grid-cols-3 gap-6" style={{ marginBottom: '2rem' }}>
        {subjects.map((sub, i) => (
          <div key={i} className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>
              {sub.name}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Avg Marks:</span>
              <span style={{ fontWeight: '500' }}>{sub.avgMarks}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Avg Attendance:</span>
              <span style={{ fontWeight: '500' }}>{sub.avgAttendance}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>At-Risk Students:</span>
              <span className={`badge ${sub.atRisk > 0 ? 'badge-danger' : 'badge-success'}`}>{sub.atRisk}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="card ai-glow" style={{background:'var(--grad-primary)', color:'white'}}>
        <div style={{display:'flex', alignItems:'center', gap:'0.5rem', marginBottom:'1rem'}}>
           <BrainCircuit size={20} />
           <h3 style={{fontSize:'1.2rem'}}>AI Teaching Insights</h3>
        </div>
        <p style={{color:'rgba(255,255,255,0.9)'}}>
          Based on historical data, students in Operating Systems struggle most with "Process Synchronization". We recommend dedicating an extra tutorial session for this topic to reduce the number of at-risk students.
        </p>
      </div>
    </div>
  );
}
