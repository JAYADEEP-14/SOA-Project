import React from 'react';
import { Outlet } from 'react-router-dom';
import FacultySidebar from './FacultySidebar';
import Topbar from './Topbar';
import './DashboardLayout.css';

export default function FacultyLayout({ user }) {
  return (
    <div className="dashboard-layout">
      <FacultySidebar />
      <div className="main-content">
        <Topbar user={user} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
