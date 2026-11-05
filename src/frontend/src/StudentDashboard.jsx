import { useAuth } from './AuthContext';

export default function StudentDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="dashboard-container">
      <div className="glass-panel card" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
        <h2 style={{ color: '#a855f7' }}>Welcome, Student</h2>
        <p>Access your personalized academic portal.</p>
      </div>

      <div className="glass-panel card">
        <div className="card-title">?? My Schedule</div>
        <p>You have 3 classes today.</p>
      </div>

      <div className="glass-panel card">
        <div className="card-title">?? My Attendance</div>
        <div className="card-value" style={{ color: '#10b981' }}>88%</div>
        <p>You're on track!</p>
      </div>
    </div>
  );
}
