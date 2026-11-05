import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserCog, BookOpen, BarChart3, CalendarDays, Building2, CalendarIcon, Bot, Bell, User, Settings, LogOut } from 'lucide-react';
import './Sidebar.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Department Dashboard', path: '/hod/dashboard' },
  { icon: Users, label: 'Students', path: '/hod/students' },
  { icon: UserCog, label: 'Faculty', path: '/hod/faculty' },
  { icon: BookOpen, label: 'Academics', path: '/hod/academics' },
  { icon: BarChart3, label: 'Department Analytics', path: '/hod/analytics' },
  { icon: CalendarDays, label: 'Event Management', path: '/hod/events' },
  { icon: Building2, label: 'Resource Management', path: '/hod/resources' },
  { icon: CalendarIcon, label: 'Faculty Leave', path: '/hod/leave' },
  { icon: Bot, label: 'HOD AI Assistant', path: '/hod/ai-assistant' },
  { icon: Bell, label: 'Notifications', path: '/hod/notifications' },
  { icon: User, label: 'Profile', path: '/hod/profile' }
];

export default function HodSidebar() {
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
