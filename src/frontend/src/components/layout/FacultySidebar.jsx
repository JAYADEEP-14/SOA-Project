import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, CalendarCheck, BarChart3, CalendarDays, Building2, CalendarIcon, Bot, Bell, User, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/faculty/dashboard' },
  { icon: Users, label: 'My Students', path: '/faculty/students' },
  { icon: BookOpen, label: 'Teaching', path: '/faculty/teaching' },
  { icon: CalendarCheck, label: 'Attendance Management', path: '/faculty/attendance' },
  { icon: BarChart3, label: 'Academic Performance', path: '/faculty/performance' },
  { icon: CalendarDays, label: 'Events', path: '/faculty/events' },
  { icon: Building2, label: 'Resources', path: '/faculty/resources' },
  { icon: CalendarIcon, label: 'Leave', path: '/faculty/leave' },
  { icon: Bot, label: 'Faculty AI Assistant', path: '/faculty/ai-assistant' },
  { icon: Bell, label: 'Notifications', path: '/faculty/notifications' },
  { icon: User, label: 'My Profile', path: '/faculty/profile' }
];

export default function FacultySidebar() {
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
