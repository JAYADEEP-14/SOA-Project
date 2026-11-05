import React from 'react';
import { Activity, Thermometer, Wind, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const energyData = [
  { time: '08:00', usage: 120 },
  { time: '10:00', usage: 250 },
  { time: '12:00', usage: 380 },
  { time: '14:00', usage: 410 },
  { time: '16:00', usage: 290 },
  { time: '18:00', usage: 150 },
];

export default function InfraMonitoring() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1>Infrastructure & Energy</h1>
          <p className="subtitle">Real-time monitoring of campus facilities.</p>
        </div>
        <div className="badge badge-success" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={16} /> System Nominal
        </div>
      </div>

      <div className="kpi-grid">
        <div className="card kpi-card">
          <div className="kpi-icon bg-primary-light"><Zap size={24} className="text-warning" /></div>
          <div className="kpi-content">
            <h3>Current Power Draw</h3>
            <div className="kpi-value">412 kW</div>
            <span className="trend positive">12% below peak</span>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-icon bg-primary-light"><Wind size={24} className="text-accent" /></div>
          <div className="kpi-content">
            <h3>HVAC Efficiency</h3>
            <div className="kpi-value">94%</div>
            <span className="trend positive">Optimal</span>
          </div>
        </div>
        <div className="card kpi-card">
          <div className="kpi-icon bg-primary-light"><Thermometer size={24} className="text-danger" /></div>
          <div className="kpi-content">
            <h3>Avg Temp</h3>
            <div className="kpi-value">22°C</div>
            <span className="trend text-muted">Stable</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6" style={{ marginTop: '2rem' }}>
        
        <div className="card chart-card col-span-2">
          <div className="card-header">
            <h3>Energy Consumption (Today)</h3>
          </div>
          <div className="chart-container" style={{ height: '300px', marginTop: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--warning)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--warning)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Area type="monotone" dataKey="usage" stroke="var(--warning)" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card list-card">
          <div className="card-header" style={{marginBottom:'1rem'}}>
            <h3>Active Alerts</h3>
          </div>
          <div className="list-item">
            <div style={{background:'var(--bg-color)', padding:'0.5rem', borderRadius:'var(--radius-sm)'}}>
              <AlertTriangle size={20} className="text-danger" />
            </div>
            <div style={{flex:1}}>
              <p style={{fontWeight:'600'}}>Elevator 2 Offline</p>
              <p style={{fontSize:'0.85rem', color:'var(--text-muted)'}}>Block B • Maintenance dispatched</p>
            </div>
          </div>
          <div className="list-item">
            <div style={{background:'var(--bg-color)', padding:'0.5rem', borderRadius:'var(--radius-sm)'}}>
              <AlertTriangle size={20} className="text-warning" />
            </div>
            <div style={{flex:1}}>
              <p style={{fontWeight:'600'}}>High AC Usage</p>
              <p style={{fontSize:'0.85rem', color:'var(--text-muted)'}}>Library • Recommend increasing temp by 1°C</p>
            </div>
          </div>
          
          <button className="btn btn-outline" style={{width: '100%', marginTop: '1rem'}}>View All Systems</button>
        </div>

      </div>
    </div>
  );
}
