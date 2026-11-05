import React from 'react';
import { Bus, MapPin, Clock, User } from 'lucide-react';

export default function TransportView() {
  const routes = [
    { id: 'Route 1A', driver: 'Mike Johnson', status: 'On Route', eta: '10 mins' },
    { id: 'Route 2B', driver: 'Sarah Smith', status: 'At Depot', eta: '--' },
    { id: 'Route 3C', driver: 'David Lee', status: 'Delayed', eta: '25 mins' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Transport Management</h1>
        <p className="subtitle">Live fleet tracking and route management.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {routes.map((r, i) => (
          <div key={i} className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Bus className="text-secondary" /> {r.id}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><User size={16}/> {r.driver}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><Clock size={16}/> ETA: {r.eta}</p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className={`badge ${r.status === 'On Route' ? 'badge-success' : r.status === 'Delayed' ? 'badge-danger' : 'badge-ai'}`}>{r.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
