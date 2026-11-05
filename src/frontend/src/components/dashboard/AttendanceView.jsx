import React from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

export default function AttendanceView() {
  const records = [
    { date: 'Oct 15, 2026', course: 'Database Management Systems', status: 'Present', time: '10:00 AM' },
    { date: 'Oct 14, 2026', course: 'Operating Systems', status: 'Absent', time: '09:00 AM' },
    { date: 'Oct 13, 2026', course: 'Machine Learning', status: 'Present', time: '11:00 AM' },
    { date: 'Oct 12, 2026', course: 'Database Management Systems', status: 'Present', time: '10:00 AM' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Attendance Logs</h1>
        <p className="subtitle">Detailed biometric attendance tracking.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {records.map((r, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {r.status === 'Present' ? <CheckCircle className="text-success" size={24} /> : <XCircle className="text-danger" size={24} />}
              <div>
                <h4 style={{ fontWeight: 'bold' }}>{r.course}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{r.date} at {r.time}</p>
              </div>
            </div>
            <span className={`badge ${r.status === 'Present' ? 'badge-success' : 'badge-danger'}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
