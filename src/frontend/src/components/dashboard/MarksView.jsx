import React from 'react';
import { Award, BookOpen } from 'lucide-react';

export default function MarksView() {
  const subjects = [
    { name: 'Database Management Systems', grade: 'A+', score: '95/100' },
    { name: 'Operating Systems', grade: 'B', score: '78/100' },
    { name: 'Machine Learning', grade: 'A', score: '88/100' },
    { name: 'Computer Networks', grade: 'A-', score: '82/100' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Academic Performance</h1>
        <p className="subtitle">Semester grades and continuous evaluation marks.</p>
      </div>

      <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><Award className="text-secondary"/> <h3>CGPA</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>8.74</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {subjects.map((sub, i) => (
          <div key={i} className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', display:'flex', gap:'0.5rem', alignItems:'center' }}>
              <BookOpen size={18} className="text-accent" /> {sub.name}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Score: {sub.score}</span>
              <span className="badge badge-ai" style={{ fontSize: '1rem' }}>Grade: {sub.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
