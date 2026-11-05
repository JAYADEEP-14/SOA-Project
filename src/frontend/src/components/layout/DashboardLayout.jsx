import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function DashboardLayout({ role, user }) {
  return (
    <div className="dashboard-layout">
      <Sidebar role={role} />
      <div className="main-content">
        <Topbar role={role} user={user} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
