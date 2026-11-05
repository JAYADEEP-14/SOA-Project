import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

export default function DepartmentFaculty() {
  const faculty = [
    { name: 'Dr. Alan Turing', role: 'Professor', phone: 'Ext 101', email: 'alan@edufusion.com' },
    { name: 'Dr. Ada Lovelace', role: 'Associate Professor', phone: 'Ext 102', email: 'ada@edufusion.com' },
    { name: 'Dr. Grace Hopper', role: 'Assistant Professor', phone: 'Ext 103', email: 'grace@edufusion.com' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Department Faculty</h1>
        <p className="subtitle">Manage professors and staff in your department.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {faculty.map((f, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users className="text-secondary" />
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{f.name}</h3>
                <span className="badge badge-ai" style={{ marginTop: '0.3rem' }}>{f.role}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> {f.email}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> {f.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
