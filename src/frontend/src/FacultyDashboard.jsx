import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function FacultyDashboard() {
  const [prompt, setPrompt] = useState('predict');
  const [agentResponse, setAgentResponse] = useState('');
  const [loading, setLoading] = useState(false);
  
  const askAgent = async (e) => {
    e.preventDefault();
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
      setAgentResponse('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="glass-panel card" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
        <h2 style={{ color: '#6366f1' }}>Welcome, Faculty Member</h2>
        <p>Manage your classes and access student performance predictions.</p>
      </div>

      <div className="glass-panel card">
        <div className="card-title">????? Today's Classes</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '1rem' }}>
          <li style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '4px' }}>10:00 AM - Data Structures (Room 304)</li>
          <li style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '4px' }}>01:00 PM - Algorithms (Room 102)</li>
        </ul>
      </div>

      <div className="glass-panel card">
        <div className="card-title">?? Student Performance Predictor</div>
        <form onSubmit={askAgent} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Analyzing...' : 'Run Risk Analysis on Class'}
          </button>
        </form>
        {agentResponse && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '8px' }}>
            <p style={{ fontSize: '0.9rem' }}>{agentResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
