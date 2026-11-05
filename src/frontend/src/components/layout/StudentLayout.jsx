import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function StudentLayout({ user }) {
  return (
    <div className="dashboard-layout">
      <StudentSidebar />
      <div className="main-content">
        <Topbar user={user} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
