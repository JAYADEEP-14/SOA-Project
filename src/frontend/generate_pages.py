import os

dashboard_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components\dashboard'

components = {
    'AttendanceView.jsx': """import React from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

export default function AttendanceView() {
  const records = [
    { date: 'Oct 15, 2026', course: 'Database Management Systems', status: 'Present', time: '10:00 AM' },
    { date: 'Oct 14, 2026', course: 'Operating Systems', status: 'Absent', time: '09:00 AM' },
    { date: 'Oct 13, 2026', course: 'Machine Learning', status: 'Present', time: '11:00 AM' },
    { date: 'Oct 12, 2026', course: 'Database Management Systems', status: 'Present', time: '10:00 AM' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Attendance Logs</h1>
        <p className="subtitle">Detailed biometric attendance tracking.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {records.map((r, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {r.status === 'Present' ? <CheckCircle className="text-success" size={24} /> : <XCircle className="text-danger" size={24} />}
              <div>
                <h4 style={{ fontWeight: 'bold' }}>{r.course}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{r.date} at {r.time}</p>
              </div>
            </div>
            <span className={`badge ${r.status === 'Present' ? 'badge-success' : 'badge-danger'}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
""",
    'MarksView.jsx': """import React from 'react';
import { Award, BookOpen } from 'lucide-react';

export default function MarksView() {
  const subjects = [
    { name: 'Database Management Systems', grade: 'A+', score: '95/100' },
    { name: 'Operating Systems', grade: 'B', score: '78/100' },
    { name: 'Machine Learning', grade: 'A', score: '88/100' },
    { name: 'Computer Networks', grade: 'A-', score: '82/100' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Academic Performance</h1>
        <p className="subtitle">Semester grades and continuous evaluation marks.</p>
      </div>

      <div className="grid grid-cols-4 gap-6" style={{ marginBottom: '2rem' }}>
        <div className="card">
          <div style={{display:'flex', gap:'0.5rem', marginBottom:'0.5rem'}}><Award className="text-secondary"/> <h3>CGPA</h3></div>
          <p className="text-gradient" style={{fontSize:'2.5rem', fontWeight:'bold'}}>8.74</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {subjects.map((sub, i) => (
          <div key={i} className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', display:'flex', gap:'0.5rem', alignItems:'center' }}>
              <BookOpen size={18} className="text-accent" /> {sub.name}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Score: {sub.score}</span>
              <span className="badge badge-ai" style={{ fontSize: '1rem' }}>Grade: {sub.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
""",
    'NotificationsView.jsx': """import React from 'react';
import { Bell, AlertCircle, Info } from 'lucide-react';

export default function NotificationsView() {
  const notifs = [
    { title: 'Campus Maintenance', msg: 'Main server will be down for 2 hours on Sunday.', type: 'warning', time: '2 hours ago' },
    { title: 'Exam Schedule Released', msg: 'Midterm exam schedule is now available in your portal.', type: 'info', time: '5 hours ago' },
    { title: 'Library Dues', msg: 'Please return "Introduction to Algorithms" to avoid late fees.', type: 'alert', time: '1 day ago' },
  ];

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
""",
    'ProfileView.jsx': """import React from 'react';
import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>My Profile</h1>
        <p className="subtitle">Manage your personal information and settings.</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-1" style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--grad-primary)', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={64} color="white" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>John Doe</h2>
          <span className="badge badge-ai" style={{ marginBottom: '1.5rem' }}>Active Member</span>
          <p style={{ color: 'var(--text-muted)' }}>ID: EDU-2026-8942</p>
        </div>
        
        <div className="card col-span-2">
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Contact Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Mail className="text-secondary" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</p>
                <p style={{ fontWeight: '500' }}>johndoe@example.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Phone className="text-success" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Phone</p>
                <p style={{ fontWeight: '500' }}>+1 234 567 890</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <MapPin className="text-danger" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Address</p>
                <p style={{ fontWeight: '500' }}>123 Campus Drive, Tech City</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <Shield className="text-accent" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Security Level</p>
                <p style={{ fontWeight: '500' }}>Standard Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
""",
    'LeaveManagement.jsx': """import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function LeaveManagement() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Leave Management</h1>
        <p className="subtitle">Apply for leave and view past history.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Apply for Leave</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="date" className="input" />
            <select className="input">
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Academic Leave</option>
            </select>
            <textarea className="input" placeholder="Reason for leave..." rows={4}></textarea>
            <button className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Applications</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16}/> Sep 12, 2026</strong>
                <span className="badge badge-success">Approved</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Conference travel - Academic Leave</p>
            </div>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16}/> Oct 20, 2026</strong>
                <span className="badge badge-warning">Pending</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Personal work - Casual Leave</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
""",
    'AnalyticsView.jsx': """import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity } from 'lucide-react';

export default function AnalyticsView() {
  const data = [
    { name: 'CS', students: 1200 },
    { name: 'Mech', students: 800 },
    { name: 'Civil', students: 600 },
    { name: 'Elec', students: 900 },
    { name: 'Bio', students: 400 },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Analytics & Reports</h1>
        <p className="subtitle">Enterprise-grade reporting for management.</p>
      </div>

      <div className="card" style={{ height: '400px' }}>
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity className="text-secondary"/> Enrollment Trends</h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="var(--text-muted)" tickLine={false} axisLine={false} />
            <YAxis stroke="var(--text-muted)" tickLine={false} axisLine={false} />
            <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
            <Bar dataKey="students" fill="var(--secondary)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
""",
    'SystemHealthView.jsx': """import React from 'react';
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
""",
    'TransportView.jsx': """import React from 'react';
import { Bus, MapPin, Clock } from 'lucide-react';

export default function TransportView() {
  const routes = [
    { id: 'Route 1A', driver: 'Mike Johnson', status: 'On Route', eta: '10 mins' },
    { id: 'Route 2B', driver: 'Sarah Smith', status: 'At Depot', eta: '--' },
    { id: 'Route 3C', driver: 'David Lee', status: 'Delayed', eta: '25 mins' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Transport Management</h1>
        <p className="subtitle">Live fleet tracking and route management.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {routes.map((r, i) => (
          <div key={i} className="card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Bus className="text-secondary" /> {r.id}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><User size={16}/> {r.driver}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}><Clock size={16}/> ETA: {r.eta}</p>
              <div style={{ marginTop: '0.5rem' }}>
                <span className={`badge ${r.status === 'On Route' ? 'badge-success' : r.status === 'Delayed' ? 'badge-danger' : 'badge-ai'}`}>{r.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
""",
    'ChildDetailsView.jsx': """import React from 'react';
import { User, Book, MapPin } from 'lucide-react';

export default function ChildDetailsView() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>My Child</h1>
        <p className="subtitle">Overview of your child's academic profile.</p>
      </div>

      <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--grad-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <User size={48} color="white" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>John Doe</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>B.Tech Computer Science, 3rd Year</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="badge badge-ai"><Book size={14} style={{marginRight:'0.3rem'}}/> Section A</span>
            <span className="badge badge-success"><MapPin size={14} style={{marginRight:'0.3rem'}}/> Hostel C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
""",
    'DepartmentFaculty.jsx': """import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

export default function DepartmentFaculty() {
  const faculty = [
    { name: 'Dr. Alan Turing', role: 'Professor', phone: 'Ext 101', email: 'alan@edufusion.com' },
    { name: 'Dr. Ada Lovelace', role: 'Associate Professor', phone: 'Ext 102', email: 'ada@edufusion.com' },
    { name: 'Dr. Grace Hopper', role: 'Assistant Professor', phone: 'Ext 103', email: 'grace@edufusion.com' },
  ];

  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>Department Faculty</h1>
        <p className="subtitle">Manage professors and staff in your department.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {faculty.map((f, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users className="text-secondary" />
              </div>
              <div>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{f.name}</h3>
                <span className="badge badge-ai" style={{ marginTop: '0.3rem' }}>{f.role}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> {f.email}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> {f.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"""
}

# The TransportView uses a User icon but didn't import it. I'll add the import in the script logic below if needed.
# Actually I'll just write it as is, wait I need to make sure I add 'User' import to TransportView.
components['TransportView.jsx'] = components['TransportView.jsx'].replace("import { Bus, MapPin, Clock }", "import { Bus, MapPin, Clock, User }")


for filename, content in components.items():
    path = os.path.join(dashboard_dir, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Generated all functional view components.")
