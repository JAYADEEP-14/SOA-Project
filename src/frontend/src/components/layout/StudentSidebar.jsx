import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, CalendarCheck, FileText, Bot, CalendarDays, Building2, Bell, User, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },
  { icon: BookOpen, label: 'My Academics', path: '/student/academics' },
  { icon: CalendarCheck, label: 'Attendance', path: '/student/attendance' },
  { icon: FileText, label: 'Marks', path: '/student/marks' },
  { icon: Bot, label: 'AI Student Assistant', path: '/student/ai-assistant' },
  { icon: CalendarDays, label: 'Events', path: '/student/events' },
  { icon: Building2, label: 'Resources', path: '/student/resources' },
  { icon: Bell, label: 'Notifications', path: '/student/notifications' },
  { icon: User, label: 'My Profile', path: '/student/profile' }
];

export default function StudentSidebar() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon"><Bot size={24} /></div>
        <h2>EduFusion <span className="text-gradient">AI</span></h2>
      </div>
      
      <div className="sidebar-content">
        <nav className="nav-menu">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.path} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="nav-link" style={{cursor: 'pointer'}}>
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div className="nav-link text-danger" onClick={handleLogout} style={{cursor: 'pointer'}}>
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
