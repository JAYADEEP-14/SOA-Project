import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function AdminLayout({ user }) {
  return (
    <div className="dashboard-layout">
      <AdminSidebar />
      <div className="main-content">
        <Topbar user={user} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
