import React from 'react';
import { Zap, BrainCircuit, Activity, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const riskData = [
  { month: 'Aug', riskIndex: 12 },
  { month: 'Sep', riskIndex: 18 },
  { month: 'Oct', riskIndex: 14 },
  { month: 'Nov', riskIndex: 22 },
];

export default function AiInsights() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>AI Insights Hub</h1>
        <p className="subtitle">University-wide predictive analytics powered by ML.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 card chart-card">
          <div className="card-header">
            <h3 style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><BrainCircuit className="text-accent"/> Global Student Risk Index</h3>
          </div>
          <div className="chart-container" style={{ height: '300px', marginTop: '1rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riskData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--danger)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--danger)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Area type="monotone" dataKey="riskIndex" stroke="var(--danger)" strokeWidth={3} fillOpacity={1} fill="url(#colorRisk)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1" style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
          <div className="card ai-glow" style={{padding:'1.5rem'}}>
             <div className="ai-insight-header" style={{ marginBottom: '1rem', color: 'white', display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <Zap size={20} />
              <span>EARLY WARNING</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
              The ML model detects a 14% increase in drop-out risk for 2nd Year B.Tech students based on recent mid-term performance.
            </p>
            <button className="btn" style={{width:'100%', background:'white', color:'var(--primary)'}}>Deploy Intervention</button>
          </div>

          <div className="card list-card">
            <div className="card-header" style={{marginBottom:'1rem'}}><h3>System Health</h3></div>
            <div className="list-item">
              <Activity size={18} className="text-success" />
              <div style={{flex:1}}><span>Prediction API</span><br/><span style={{fontSize:'0.8rem', color:'var(--text-muted)'}}>Online - 45ms latency</span></div>
            </div>
            <div className="list-item">
              <Activity size={18} className="text-success" />
              <div style={{flex:1}}><span>Kafka Message Bus</span><br/><span style={{fontSize:'0.8rem', color:'var(--text-muted)'}}>Online - 0 lag</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
