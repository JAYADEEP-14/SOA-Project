import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import Signup from './components/auth/Signup';
import LandingPage from './components/landing/LandingPage';

import StudentLayout from './components/layout/StudentLayout';
import FacultyLayout from './components/layout/FacultyLayout';
import HodLayout from './components/layout/HodLayout';
import AdminLayout from './components/layout/AdminLayout';
import ParentLayout from './components/layout/ParentLayout';

import AdminCommandCenter from './components/dashboard/AdminCommandCenter';
import StudentDashboard from './components/dashboard/StudentDashboard';
import FacultyDashboard from './components/dashboard/FacultyDashboard';
import ParentDashboard from './components/dashboard/ParentDashboard';
import HodDashboard from './components/dashboard/HodDashboard';

import ResourceAllocation from './components/dashboard/ResourceAllocation';
import InfraMonitoring from './components/dashboard/InfraMonitoring';
import StudentManagement from './components/dashboard/StudentManagement';
import Academics from './components/dashboard/Academics';
import Events from './components/dashboard/Events';
import AiInsights from './components/dashboard/AiInsights';

import AttendanceView from './components/dashboard/AttendanceView';
import MarksView from './components/dashboard/MarksView';
import FacultyPerformanceView from './components/dashboard/FacultyPerformanceView';
import NotificationsView from './components/dashboard/NotificationsView';
import ProfileView from './components/dashboard/ProfileView';
import LeaveManagement from './components/dashboard/LeaveManagement';
import AnalyticsView from './components/dashboard/AnalyticsView';
import SystemHealthView from './components/dashboard/SystemHealthView';
import TransportView from './components/dashboard/TransportView';
import ChildDetailsView from './components/dashboard/ChildDetailsView';
import DepartmentFaculty from './components/dashboard/DepartmentFaculty';

import AIChatWidget from './AIChatWidget';
import './index.css';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/login" />;
  
  return children;
};

// Root redirect based on role
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (user.role === 'STUDENT') return <Navigate to="/student/dashboard" />;
  if (user.role === 'FACULTY') return <Navigate to="/faculty/dashboard" />;
  if (user.role === 'HOD') return <Navigate to="/hod/dashboard" />;
  if (user.role === 'ADMIN') return <Navigate to="/admin/dashboard" />;
  if (user.role === 'PARENT') return <Navigate to="/parent/dashboard" />;
  return <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user } = useAuth();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<RoleBasedRedirect />} />

        {/* STUDENT PORTAL */}
        <Route path="/student" element={
          <ProtectedRoute allowedRoles={['STUDENT']}>
            <StudentLayout user={user} />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="academics" element={<Academics />} />
          <Route path="attendance" element={<AttendanceView />} />
          <Route path="marks" element={<MarksView />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="ai-assistant" element={<AiInsights />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

        {/* FACULTY PORTAL */}
        <Route path="/faculty" element={
          <ProtectedRoute allowedRoles={['FACULTY']}>
            <FacultyLayout user={user} />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="teaching" element={<Academics />} />
          <Route path="attendance" element={<AttendanceView />} />
          <Route path="performance" element={<FacultyPerformanceView />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="leave" element={<LeaveManagement />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="ai-assistant" element={<AiInsights />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

        {/* HOD PORTAL */}
        <Route path="/hod" element={
          <ProtectedRoute allowedRoles={['HOD']}>
            <HodLayout user={user} />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<HodDashboard />} />
          <Route path="students" element={<StudentManagement />} />
          <Route path="faculty" element={<DepartmentFaculty />} />
          <Route path="academics" element={<Academics />} />
          <Route path="analytics" element={<AnalyticsView />} />
          <Route path="events" element={<Events />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="leave" element={<LeaveManagement />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="ai-assistant" element={<AiInsights />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

        {/* ADMIN PORTAL */}
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={['ADMIN']}>
            <AdminLayout user={user} />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<AdminCommandCenter />} />
          <Route path="users" element={<StudentManagement />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="events" element={<Events />} />
          <Route path="infrastructure" element={<InfraMonitoring />} />
          <Route path="transport" element={<TransportView />} />
          <Route path="analytics" element={<AnalyticsView />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="ai-assistant" element={<AiInsights />} />
          <Route path="health" element={<SystemHealthView />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

        {/* PARENT PORTAL */}
        <Route path="/parent" element={
          <ProtectedRoute allowedRoles={['PARENT']}>
            <ParentLayout user={user} />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<ParentDashboard />} />
          <Route path="child" element={<ChildDetailsView />} />
          <Route path="progress" element={<MarksView />} />
          <Route path="calendar" element={<Events />} />
          <Route path="notifications" element={<NotificationsView />} />
          <Route path="ai-assistant" element={<AiInsights />} />
          <Route path="profile" element={<ProfileView />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {user && <AIChatWidget />}
    </>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
