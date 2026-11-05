import React from 'react';
import { User, Book, MapPin } from 'lucide-react';

export default function ChildDetailsView() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>My Child</h1>
        <p className="subtitle">Overview of your child's academic profile.</p>
      </div>

      <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={48} color="white" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>John Doe</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>B.Tech Computer Science, 3rd Year</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-ai"><Book size={14} style={{marginRight:'0.3rem'}}/> Section A</span>
            <span className="badge badge-success"><MapPin size={14} style={{marginRight:'0.3rem'}}/> Hostel C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
