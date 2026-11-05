import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { useAuth } from './AuthContext';

export default function AdminDashboard() {
  const [prompt, setPrompt] = useState('');
  const [agentResponse, setAgentResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const askAgent = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:8001/agent/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await response.json();
      setAgentResponse(data.response);
    } catch (error) {
      setAgentResponse('Error connecting to Agent Service: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const attendanceData = [
    { name: 'Week 1', rate: 85 },
    { name: 'Week 2', rate: 88 },
    { name: 'Week 3', rate: 92 },
    { name: 'Week 4', rate: 89 },
    { name: 'Week 5', rate: 94 },
  ];

  const resourceData = [
    { name: 'Library', usage: 400 },
    { name: 'Labs', usage: 300 },
    { name: 'Gym', usage: 200 },
    { name: 'Cafeteria', usage: 500 },
  ];

  return (
    <div className="dashboard-container">
      <div className="glass-panel card" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
        <h2 style={{ color: '#ec4899' }}>Welcome, System Administrator</h2>
        <p>You have full access to campus analytics and AI orchestration.</p>
      </div>
      
      {/* Admin Analytics Section */}
      <div className="glass-panel card" style={{ gridColumn: '1 / -1' }}>
        <div className="card-title">?? Admin Analytics Overview</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#a855f7' }}>Student Attendance Trends</h4>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#f1f5f9" />
                  <YAxis stroke="#f1f5f9" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="rate" stroke="#6366f1" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#ec4899' }}>Resource Usage</h4>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resourceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="#f1f5f9" />
                  <YAxis stroke="#f1f5f9" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} cursor={{fill: 'rgba(255,255,255,0.1)'}}/>
                  <Bar dataKey="usage" fill="#ec4899" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel card">
        <div className="card-title">?? Master AI Orchestrator</div>
        <form onSubmit={askAgent} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Command the AI Agent..." 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Executing...' : 'Execute Command'}
          </button>
        </form>
        {agentResponse && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '8px', borderLeft: '4px solid #a855f7' }}>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{agentResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
