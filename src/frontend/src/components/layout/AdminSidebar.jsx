import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Building2, CalendarDays, Activity, Truck, BarChart3, Bot, Bell, HeartPulse, User, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Campus Command Center', path: '/admin/dashboard' },
  { icon: Users, label: 'User Management', path: '/admin/users' },
  { icon: Building2, label: 'Campus Resources', path: '/admin/resources' },
  { icon: CalendarDays, label: 'Campus Events', path: '/admin/events' },
  { icon: Activity, label: 'Infrastructure', path: '/admin/infrastructure' },
  { icon: Truck, label: 'Transport', path: '/admin/transport' },
  { icon: BarChart3, label: 'Campus Analytics', path: '/admin/analytics' },
  { icon: Bot, label: 'AI Command Center', path: '/admin/ai-assistant' },
  { icon: Bell, label: 'Notifications', path: '/admin/notifications' },
  { icon: HeartPulse, label: 'System Health', path: '/admin/health' },
  { icon: User, label: 'Profile', path: '/admin/profile' }
];

export default function AdminSidebar() {
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
