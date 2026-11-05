import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function LeaveManagement() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Leave Management</h1>
        <p className="subtitle">Apply for leave and view past history.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Apply for Leave</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="date" className="input" />
            <select className="input">
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Academic Leave</option>
            </select>
            <textarea className="input" placeholder="Reason for leave..." rows={4}></textarea>
            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Applications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16}/> Sep 12, 2026</strong>
                <span className="badge badge-success">Approved</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Conference travel - Academic Leave</p>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16}/> Oct 20, 2026</strong>
                <span className="badge badge-warning">Pending</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Personal work - Casual Leave</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
