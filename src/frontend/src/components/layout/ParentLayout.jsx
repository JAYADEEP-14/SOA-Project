import React from 'react';
import { Outlet } from 'react-router-dom';
import ParentSidebar from './ParentSidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function ParentLayout({ user }) {
  return (
    <div className="dashboard-layout">
      <ParentSidebar />
      <div className="main-content">
        <Topbar user={user} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
