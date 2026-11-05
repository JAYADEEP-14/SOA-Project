import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, CalendarCheck, FileText, CalendarDays, Building2, Bell, Bot, BarChart3, Activity, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Users, label: 'Students', path: '/dashboard/students' },
  { icon: BookOpen, label: 'Academics', path: '/dashboard/academics' },
  { icon: CalendarCheck, label: 'Attendance', path: '/dashboard/attendance' },
  { icon: FileText, label: 'Marks', path: '/dashboard/marks' },
  { icon: Building2, label: 'Resources', path: '/dashboard/resources' },
  { icon: CalendarDays, label: 'Events', path: '/dashboard/events' },
  { icon: Activity, label: 'Infrastructure', path: '/dashboard/infrastructure' },
  { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
  { icon: Bot, label: 'AI Assistant', path: '/dashboard/ai-assistant' },
  { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
];

export default function Sidebar({ role }) {
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
