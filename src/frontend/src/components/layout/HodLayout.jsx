import React from 'react';
import { Outlet } from 'react-router-dom';
import HodSidebar from './HodSidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function HodLayout({ user }) {
  return (
    <div className="dashboard-layout">
      <HodSidebar />
      <div className="main-content">
        <Topbar user={user} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
