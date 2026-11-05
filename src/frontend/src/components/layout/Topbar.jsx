import React from 'react';
import { Bell, Search, UserCircle, ChevronDown } from 'lucide-react';
import './Topbar.css';

export default function Topbar({ role, user }) {
  return (
    <header className="topbar glass">
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search campus services, students, or events..." className="search-input" />
      </div>
      
      <div className="topbar-actions">
        <button className="icon-btn relative">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>
        
        <div className="profile-dropdown">
          <div className="profile-info">
            <span className="profile-role badge badge-ai">{user?.role || role || 'Student'}</span>
            <span className="profile-name">{user?.name || 'User'}</span>
          </div>
          <UserCircle size={32} className="text-secondary" />
          <ChevronDown size={16} className="text-muted" />
        </div>
      </div>
    </header>
  );
}
