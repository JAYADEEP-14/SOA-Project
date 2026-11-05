import React, { useState, useEffect } from 'react';
import { Bell, AlertCircle, Info } from 'lucide-react';

export default function NotificationsView() {
  const [notifs, setNotifs] = useState([
    { title: 'Campus Maintenance', msg: 'Main server will be down for 2 hours on Sunday.', type: 'warning', time: '2 hours ago' },
    { title: 'Exam Schedule Released', msg: 'Midterm exam schedule is now available in your portal.', type: 'info', time: '5 hours ago' },
    { title: 'Library Dues', msg: 'Please return "Introduction to Algorithms" to avoid late fees.', type: 'alert', time: '1 day ago' },
  ]);

  useEffect(() => {
    const localNotifs = JSON.parse(localStorage.getItem('edu_notifs') || '[]');
    if (localNotifs.length > 0) {
      setNotifs(prev => [...localNotifs, ...prev.filter(n => !n.id)]); // avoid duplicating mock notifs on re-renders if we wanted, but it's fine
    }
  }, []);

  const handleApprove = (notifId, roomId, requester) => {
    const localNotifs = JSON.parse(localStorage.getItem('edu_notifs') || '[]');
    const updatedNotifs = localNotifs.map(n => 
      n.id === notifId ? { ...n, requiresApproval: false, title: 'Booking Approved', msg: `Resource ${roomId} booking was approved.` } : n
    );
    
    const successNotif = {
      id: Date.now() + 1,
      title: 'Room Booked Successfully',
      msg: `Your request for Resource ${roomId} has been approved!`,
      type: 'success',
      time: 'Just now'
    };
    
    const finalNotifs = [successNotif, ...updatedNotifs];
    localStorage.setItem('edu_notifs', JSON.stringify(finalNotifs));
    
    const savedRooms = JSON.parse(localStorage.getItem('edu_rooms') || '[]');
    const updatedRooms = savedRooms.map(room => 
      room.id === roomId ? { ...room, status: 'occupied', nextFree: 'Just Booked' } : room
    );
    localStorage.setItem('edu_rooms', JSON.stringify(updatedRooms));
    
    setNotifs(prev => {
      const updated = prev.map(n => 
        n.id === notifId ? { ...n, requiresApproval: false, title: 'Booking Approved', msg: `Resource ${roomId} booking was approved.` } : n
      );
      return [successNotif, ...updated];
    });
    
    alert(`Accepted booking for ${roomId}. Notification sent to ${requester}.`);
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const role = user.role || 'STUDENT';
  const isAdminOrHod = role === 'ADMIN' || role === 'HOD';

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Notification Center</h1>
        <p className="subtitle">Global campus alerts and personal messages.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {notifs.map((n, i) => (
          <div key={i} className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            {n.type === 'warning' ? <AlertCircle className="text-warning" size={28} /> : 
             n.type === 'alert' ? <AlertCircle className="text-danger" size={28} /> : 
             <Info className="text-secondary" size={28} />}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <h3 style={{ fontWeight: 'bold' }}>{n.title}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{n.time}</span>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>{n.msg}</p>
              {n.requiresApproval && isAdminOrHod && (
                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-sm" onClick={() => handleApprove(n.id, n.roomId, n.requester)}>Accept</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
