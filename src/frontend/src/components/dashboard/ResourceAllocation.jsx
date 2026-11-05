import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Zap, Search, Users } from 'lucide-react';

const rooms = [
  { id: 'C-101', type: 'Lecture Hall', capacity: 120, status: 'occupied', nextFree: '2:00 PM' },
  { id: 'C-102', type: 'Lecture Hall', capacity: 80, status: 'available', nextFree: 'Now' },
  { id: 'C-103', type: 'Lecture Hall', capacity: 100, status: 'available', nextFree: 'Now' },
  { id: 'C-104', type: 'Lecture Hall', capacity: 90, status: 'occupied', nextFree: '1:00 PM' },
  { id: 'C-201', type: 'Lecture Hall', capacity: 150, status: 'available', nextFree: 'Now' },
  { id: 'C-202', type: 'Lecture Hall', capacity: 150, status: 'available', nextFree: 'Now' },
  { id: 'Lab-1', type: 'Computer Lab', capacity: 40, status: 'occupied', nextFree: '3:00 PM' },
  { id: 'Lab-2', type: 'Computer Lab', capacity: 40, status: 'available', nextFree: 'Now' },
  { id: 'Lab-3', type: 'Computer Lab', capacity: 60, status: 'occupied', nextFree: '4:00 PM' },
  { id: 'Lab-4', type: 'Chemistry Lab', capacity: 30, status: 'occupied', nextFree: '5:00 PM' },
  { id: 'Sem-1', type: 'Seminar Room', capacity: 30, status: 'available', nextFree: 'Now' },
  { id: 'Sem-2', type: 'Seminar Room', capacity: 25, status: 'available', nextFree: 'Now' },
  { id: 'Sem-3', type: 'Seminar Room', capacity: 40, status: 'available', nextFree: 'Now' },
  { id: 'Auditorium', type: 'Event Hall', capacity: 500, status: 'occupied', nextFree: 'Tomorrow' },
];

export default function ResourceAllocation() {
  const [filter, setFilter] = useState('');
  const [roomsData, setRoomsData] = useState(() => {
    const saved = localStorage.getItem('edu_rooms');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length >= 14) return parsed;
    }
    return rooms;
  });

  useEffect(() => {
    localStorage.setItem('edu_rooms', JSON.stringify(roomsData));
  }, [roomsData]);

  const handleBookRoom = (id) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = user.role || 'STUDENT';
    const isAutoApprove = role === 'ADMIN' || role === 'HOD';

    const newStatus = isAutoApprove ? 'occupied' : 'pending';
    const newNextFree = isAutoApprove ? 'Just Booked' : 'Pending Approval';
    const notifMsg = isAutoApprove 
        ? `Resource ${id} was just booked.`
        : `${role} requested to book Resource ${id}.`;

    setRoomsData(roomsData.map(room => 
      room.id === id ? { ...room, status: newStatus, nextFree: newNextFree } : room
    ));
    
    const newNotif = {
      id: Date.now(),
      roomId: id,
      requiresApproval: !isAutoApprove,
      requester: user.email || role,
      title: isAutoApprove ? 'Room Booked' : 'Room Booking Request',
      msg: notifMsg,
      type: 'info',
      time: 'Just now'
    };
    const existing = JSON.parse(localStorage.getItem('edu_notifs') || '[]');
    localStorage.setItem('edu_notifs', JSON.stringify([newNotif, ...existing]));

    alert(isAutoApprove 
      ? `Successfully booked ${id}!`
      : `Request to book ${id} sent to Admin/HOD for approval.`
    );
  };

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Resource Allocation</h1>
        <p className="subtitle">Intelligent room and asset booking system.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        
        {/* Left Column: AI Recommendation & Search */}
        <div className="col-span-1" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="card ai-glow" style={{ padding: '1.5rem' }}>
            <div className="ai-insight-header" style={{ marginBottom: '1rem', color: 'white', display:'flex', alignItems:'center', gap:'0.5rem' }}>
              <Zap size={20} />
              <span>SMART BOOKING</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
              You usually book a seminar room on Thursdays. <strong>Sem-1</strong> is available from 2 PM to 4 PM today.
            </p>
            <button 
              className="btn" 
              style={{ width: '100%', background: 'white', color: 'var(--primary)', fontWeight: 'bold' }}
              onClick={() => handleBookRoom('Sem-1')}
            >
              1-Click Book Sem-1
            </button>
          </div>

          <div className="card glass">
            <h3>Find a Resource</h3>
            <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-color)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', marginTop: '1rem' }}>
              <Search size={18} className="text-muted" />
              <input 
                type="text" 
                placeholder="Search rooms, labs..." 
                className="input" 
                style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', marginLeft: '0.5rem' }}
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </div>
            
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Resource Type</label>
              <select className="input"><option>All</option><option>Lecture Hall</option><option>Lab</option></select>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Capacity</label>
              <input type="range" min="10" max="200" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Right Column: Resource Grid */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {roomsData.map(room => (
              <div key={room.id} className="card" style={{ padding: '1.5rem', borderTop: `4px solid ${room.status === 'available' ? 'var(--success)' : room.status === 'pending' ? 'var(--warning)' : 'var(--danger)'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {room.id}
                      <span className={`badge ${room.status === 'available' ? 'badge-success' : room.status === 'pending' ? 'badge-warning' : 'badge-danger'}`} style={{ fontSize: '0.7rem' }}>
                        {room.status.toUpperCase()}
                      </span>
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{room.type}</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <Users size={16} className="text-muted" /> Capacity: {room.capacity}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <Clock size={16} className="text-muted" /> Next Free: {room.nextFree}
                  </div>
                </div>

                <button 
                  className="btn btn-outline" 
                  style={{ width: '100%' }}
                  disabled={room.status === 'occupied' || room.status === 'pending'}
                  onClick={() => handleBookRoom(room.id)}
                >
                  {room.status === 'available' ? 'Book Now' : room.status === 'pending' ? 'Pending Approval' : 'Join Waitlist'}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
