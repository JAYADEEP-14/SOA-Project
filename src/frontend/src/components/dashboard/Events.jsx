import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const events = [
  { id: 1, title: 'Annual Tech Symposium', date: 'Oct 15, 2026', time: '09:00 AM', location: 'Main Auditorium', attendees: 450, type: 'Event' },
  { id: 2, title: 'AI Ethics Guest Lecture', date: 'Oct 18, 2026', time: '02:00 PM', location: 'Virtual', attendees: 120, type: 'Seminar' },
  { id: 3, title: 'Midterm Examinations Begin', date: 'Oct 25, 2026', time: '08:00 AM', location: 'Campus-wide', attendees: 4000, type: 'Academic' },
];

export default function Events() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Campus Events</h1>
        <p className="subtitle">Upcoming seminars, holidays, and events.</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {events.map(e => (
          <div key={e.id} className="card" style={{padding:'1.5rem', display:'flex', gap:'1.5rem'}}>
            <div style={{background:'var(--bg-color)', padding:'1rem', borderRadius:'var(--radius-md)', textAlign:'center', minWidth:'80px'}}>
              <span style={{color:'var(--primary)', fontWeight:'bold', display:'block', fontSize:'1.2rem'}}>{e.date.split(' ')[1].replace(',','')}</span>
              <span style={{color:'var(--text-muted)', fontSize:'0.9rem'}}>{e.date.split(' ')[0]}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                <h3 style={{fontSize:'1.2rem', marginBottom:'0.5rem'}}>{e.title}</h3>
                <span className={`badge ${e.type==='Academic' ? 'badge-danger' : e.type==='Seminar' ? 'badge-ai' : 'badge-success'}`}>{e.type}</span>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'0.4rem', color:'var(--text-muted)', fontSize:'0.9rem', marginTop:'0.5rem'}}>
                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><Clock size={16}/> {e.time}</div>
                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><MapPin size={16}/> {e.location}</div>
                <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><Users size={16}/> {e.attendees} Registered</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
