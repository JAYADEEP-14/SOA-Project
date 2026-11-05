import React from 'react';
import { Search, Filter, MoreVertical, CheckCircle2, AlertTriangle } from 'lucide-react';

const studentsData = [
  { id: 'STU001', name: 'Alice Smith', course: 'B.Tech CS', year: 2, attendance: 92, risk: 'Low' },
  { id: 'STU002', name: 'Bob Jones', course: 'B.Tech CS', year: 2, attendance: 71, risk: 'High' },
  { id: 'STU003', name: 'Charlie Brown', course: 'B.Tech IT', year: 1, attendance: 88, risk: 'Low' },
  { id: 'STU004', name: 'Diana Prince', course: 'B.Tech EE', year: 3, attendance: 78, risk: 'Medium' },
];

export default function StudentManagement() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem', display:'flex', justifyContent:'space-between' }}>
        <div>
          <h1>Student Management</h1>
          <p className="subtitle">Directory and academic standing.</p>
        </div>
        <button className="btn btn-primary">Add Student</button>
      </div>

      <div className="card glass">
        <div style={{display:'flex', gap:'1rem', padding:'1.5rem', borderBottom:'1px solid var(--border)'}}>
          <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-color)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', flex:1 }}>
            <Search size={18} className="text-muted" />
            <input type="text" placeholder="Search by name or ID..." style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', marginLeft: '0.5rem' }} />
          </div>
          <button className="btn btn-outline" style={{display:'flex', gap:'0.5rem'}}><Filter size={18}/> Filters</button>
        </div>
        
        <div style={{overflowX: 'auto'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{textAlign:'left', borderBottom:'1px solid var(--border)', color:'var(--text-muted)'}}>
                <th style={{padding:'1rem 1.5rem'}}>ID</th>
                <th style={{padding:'1rem 1.5rem'}}>Name</th>
                <th style={{padding:'1rem 1.5rem'}}>Course</th>
                <th style={{padding:'1rem 1.5rem'}}>Attendance</th>
                <th style={{padding:'1rem 1.5rem'}}>AI Risk Level</th>
                <th style={{padding:'1rem 1.5rem'}}></th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map(s => (
                <tr key={s.id} style={{borderBottom:'1px solid var(--border)'}}>
                  <td style={{padding:'1rem 1.5rem', fontWeight:'600'}}>{s.id}</td>
                  <td style={{padding:'1rem 1.5rem'}}>{s.name}</td>
                  <td style={{padding:'1rem 1.5rem', color:'var(--text-muted)'}}>{s.course} (Yr {s.year})</td>
                  <td style={{padding:'1rem 1.5rem'}}>
                    <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
                      <div style={{width:'50px', height:'6px', background:'var(--bg-color)', borderRadius:'3px', overflow:'hidden'}}>
                        <div style={{width:`${s.attendance}%`, height:'100%', background: s.attendance > 75 ? 'var(--success)' : 'var(--danger)'}}></div>
                      </div>
                      {s.attendance}%
                    </div>
                  </td>
                  <td style={{padding:'1rem 1.5rem'}}>
                    <span className={`badge ${s.risk === 'Low' ? 'badge-success' : s.risk === 'Medium' ? 'badge-warning' : 'badge-danger'}`}>
                      {s.risk}
                    </span>
                  </td>
                  <td style={{padding:'1rem 1.5rem', textAlign:'right'}}><MoreVertical size={18} className="text-muted cursor-pointer" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
