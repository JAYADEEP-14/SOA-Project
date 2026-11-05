import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, BarChart3, CalendarDays, Bell, Bot, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/parent/dashboard' },
  { icon: User, label: 'My Child', path: '/parent/child' },
  { icon: BarChart3, label: 'Academic Progress', path: '/parent/progress' },
  { icon: CalendarDays, label: 'Calendar', path: '/parent/calendar' },
  { icon: Bell, label: 'Notifications', path: '/parent/notifications' },
  { icon: Bot, label: 'Parent AI Assistant', path: '/parent/ai-assistant' },
  { icon: User, label: 'My Profile', path: '/parent/profile' }
];

export default function ParentSidebar() {
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
