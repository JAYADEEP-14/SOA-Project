import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

export default function AnalyticsView() {
  const data = [
    { name: 'CS', students: 1200 },
    { name: 'Mech', students: 800 },
    { name: 'Civil', students: 600 },
    { name: 'Elec', students: 900 },
    { name: 'Bio', students: 400 },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Analytics & Reports</h1>
        <p className="subtitle">Enterprise-grade reporting for management.</p>
      </div>

      <div className="card" style={{ height: '400px' }}>
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity className="text-secondary"/> Enrollment Trends</h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} />
            <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
            <Bar dataKey="students" fill="var(--secondary)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
