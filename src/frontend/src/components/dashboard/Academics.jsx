import React from 'react';
import { BookOpen, GraduationCap, Clock } from 'lucide-react';

const courses = [
  { id: 'CS301', name: 'Database Management', faculty: 'Dr. Smith', credits: 4, schedule: 'Mon, Wed 10:00 AM' },
  { id: 'CS302', name: 'Artificial Intelligence', faculty: 'Prof. Davis', credits: 4, schedule: 'Tue, Thu 02:00 PM' },
  { id: 'CS303', name: 'Operating Systems', faculty: 'Dr. Johnson', credits: 3, schedule: 'Fri 09:00 AM' },
];

export default function Academics() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Academics</h1>
        <p className="subtitle">Course catalog and schedules.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {courses.map(c => (
          <div key={c.id} className="card glass" style={{padding:'1.5rem'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'1rem'}}>
              <div className="kpi-icon bg-primary-light" style={{width:'40px', height:'40px'}}><BookOpen size={20} className="text-accent" /></div>
              <span className="badge badge-ai">{c.credits} Credits</span>
            </div>
            <h3 style={{fontSize:'1.2rem', marginBottom:'0.5rem', color:'var(--primary)'}}>{c.name}</h3>
            <p style={{color:'var(--text-muted)', fontSize:'0.9rem', marginBottom:'1rem'}}>{c.id}</p>
            
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', fontSize:'0.9rem'}}>
              <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><GraduationCap size={16} className="text-muted"/> {c.faculty}</div>
              <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><Clock size={16} className="text-muted"/> {c.schedule}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
