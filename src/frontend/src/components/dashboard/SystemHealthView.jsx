import React from 'react';
import { Server, Activity, Database, Cloud } from 'lucide-react';

export default function SystemHealthView() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>System Health</h1>
        <p className="subtitle">Microservices status and infrastructure monitoring.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="card ai-glow" style={{ borderTop: '4px solid var(--success)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Server size={32} className="text-success" />
            <div>
              <h3>API Gateway</h3>
              <span className="badge badge-success">Healthy</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Uptime: 99.99% | Latency: 45ms</p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--success)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Database size={32} className="text-success" />
            <div>
              <h3>Database</h3>
              <span className="badge badge-success">Healthy</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Connections: 245 | Load: 4%</p>
        </div>

        <div className="card" style={{ borderTop: '4px solid var(--warning)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Cloud size={32} className="text-warning" />
            <div>
              <h3>AI Inference API</h3>
              <span className="badge badge-warning">Degraded</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Latency: 1200ms (High Load)</p>
        </div>
      </div>
    </div>
  );
}
