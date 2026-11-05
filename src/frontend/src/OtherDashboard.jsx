export default function OtherDashboard() {
  return (
    <div className="dashboard-container">
      <div className="glass-panel card" style={{ gridColumn: '1 / -1', marginBottom: '1rem' }}>
        <h2 style={{ color: '#10b981' }}>Welcome to EduFusion Portal</h2>
        <p>Access general campus resources and announcements.</p>
      </div>
      
      <div className="glass-panel card">
        <div className="card-title">?? Latest Announcements</div>
        <p style={{ marginTop: '1rem' }}>Campus will be closed for the upcoming public holiday. All events are rescheduled.</p>
      </div>
    </div>
  );
}
