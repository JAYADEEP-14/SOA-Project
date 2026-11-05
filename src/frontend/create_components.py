import os

components_dir = r'C:\Users\krish\.gemini\antigravity-ide\scratch\EduFusion-AI\frontend\src\components'

roles = ['Student', 'Faculty', 'Hod', 'Admin', 'Parent']

sidebar_template = """import React from 'react';
import {{ NavLink }} from 'react-router-dom';
import {{ {icons} }} from 'lucide-react';
import './Sidebar.css';

const navItems = [
{nav_items}
];

export default function {role}Sidebar() {{
  const handleLogout = () => {{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  }};

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-icon"><Bot size={24} /></div>
        <h2>EduFusion <span className="text-gradient">AI</span></h2>
      </div>
      
      <div className="sidebar-content">
        <nav className="nav-menu">
          {{navItems.map((item) => (
            <NavLink key={{item.label}} to={{item.path}} className={{({{isActive}}) => isActive ? "nav-link active" : "nav-link"}}>
              <item.icon size={{20}} />
              <span>{{item.label}}</span>
            </NavLink>
          ))}}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="nav-link" style={{{{cursor: 'pointer'}}}}>
          <Settings size={{20}} />
          <span>Settings</span>
        </div>
        <div className="nav-link text-danger" onClick={{handleLogout}} style={{{{cursor: 'pointer'}}}}>
          <LogOut size={{20}} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}}
"""

layout_template = """import React from 'react';
import {{ Outlet }} from 'react-router-dom';
import {role}Sidebar from './{role}Sidebar';
import Header from './Header';
import './DashboardLayout.css';

export default function {role}Layout({{ user }}) {{
  return (
    <div className="dashboard-layout">
      <{role}Sidebar />
      <div className="main-content">
        <Header user={{user}} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}}
"""

role_nav_items = {
    'Student': {
        'icons': 'LayoutDashboard, BookOpen, CalendarCheck, FileText, Bot, CalendarDays, Building2, Bell, User, Settings, LogOut',
        'items': [
            "  { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },",
            "  { icon: BookOpen, label: 'My Academics', path: '/student/academics' },",
            "  { icon: CalendarCheck, label: 'Attendance', path: '/student/attendance' },",
            "  { icon: FileText, label: 'Marks', path: '/student/marks' },",
            "  { icon: Bot, label: 'AI Student Assistant', path: '/student/ai-assistant' },",
            "  { icon: CalendarDays, label: 'Events', path: '/student/events' },",
            "  { icon: Building2, label: 'Resources', path: '/student/resources' },",
            "  { icon: Bell, label: 'Notifications', path: '/student/notifications' },",
            "  { icon: User, label: 'My Profile', path: '/student/profile' }",
        ]
    },
    'Faculty': {
        'icons': 'LayoutDashboard, Users, BookOpen, CalendarCheck, BarChart3, CalendarDays, Building2, CalendarIcon, Bot, Bell, User, Settings, LogOut',
        'items': [
            "  { icon: LayoutDashboard, label: 'Dashboard', path: '/faculty/dashboard' },",
            "  { icon: Users, label: 'My Students', path: '/faculty/students' },",
            "  { icon: BookOpen, label: 'Teaching', path: '/faculty/teaching' },",
            "  { icon: CalendarCheck, label: 'Attendance Management', path: '/faculty/attendance' },",
            "  { icon: BarChart3, label: 'Academic Performance', path: '/faculty/performance' },",
            "  { icon: CalendarDays, label: 'Events', path: '/faculty/events' },",
            "  { icon: Building2, label: 'Resources', path: '/faculty/resources' },",
            "  { icon: CalendarIcon, label: 'Leave', path: '/faculty/leave' },",
            "  { icon: Bot, label: 'Faculty AI Assistant', path: '/faculty/ai-assistant' },",
            "  { icon: Bell, label: 'Notifications', path: '/faculty/notifications' },",
            "  { icon: User, label: 'My Profile', path: '/faculty/profile' }"
        ]
    },
    'Hod': {
        'icons': 'LayoutDashboard, Users, UserCog, BookOpen, BarChart3, CalendarDays, Building2, CalendarIcon, Bot, Bell, User, Settings, LogOut',
        'items': [
            "  { icon: LayoutDashboard, label: 'Department Dashboard', path: '/hod/dashboard' },",
            "  { icon: Users, label: 'Students', path: '/hod/students' },",
            "  { icon: UserCog, label: 'Faculty', path: '/hod/faculty' },",
            "  { icon: BookOpen, label: 'Academics', path: '/hod/academics' },",
            "  { icon: BarChart3, label: 'Department Analytics', path: '/hod/analytics' },",
            "  { icon: CalendarDays, label: 'Event Management', path: '/hod/events' },",
            "  { icon: Building2, label: 'Resource Management', path: '/hod/resources' },",
            "  { icon: CalendarIcon, label: 'Faculty Leave', path: '/hod/leave' },",
            "  { icon: Bot, label: 'HOD AI Assistant', path: '/hod/ai-assistant' },",
            "  { icon: Bell, label: 'Notifications', path: '/hod/notifications' },",
            "  { icon: User, label: 'Profile', path: '/hod/profile' }"
        ]
    },
    'Admin': {
        'icons': 'LayoutDashboard, Users, Building2, CalendarDays, Activity, Truck, BarChart3, Bot, Bell, HeartPulse, User, Settings, LogOut',
        'items': [
            "  { icon: LayoutDashboard, label: 'Campus Command Center', path: '/admin/dashboard' },",
            "  { icon: Users, label: 'User Management', path: '/admin/users' },",
            "  { icon: Building2, label: 'Campus Resources', path: '/admin/resources' },",
            "  { icon: CalendarDays, label: 'Campus Events', path: '/admin/events' },",
            "  { icon: Activity, label: 'Infrastructure', path: '/admin/infrastructure' },",
            "  { icon: Truck, label: 'Transport', path: '/admin/transport' },",
            "  { icon: BarChart3, label: 'Campus Analytics', path: '/admin/analytics' },",
            "  { icon: Bot, label: 'AI Command Center', path: '/admin/ai-assistant' },",
            "  { icon: Bell, label: 'Notifications', path: '/admin/notifications' },",
            "  { icon: HeartPulse, label: 'System Health', path: '/admin/health' },",
            "  { icon: User, label: 'Profile', path: '/admin/profile' }"
        ]
    },
    'Parent': {
        'icons': 'LayoutDashboard, User, BarChart3, CalendarDays, Bell, Bot, Settings, LogOut',
        'items': [
            "  { icon: LayoutDashboard, label: 'Dashboard', path: '/parent/dashboard' },",
            "  { icon: User, label: 'My Child', path: '/parent/child' },",
            "  { icon: BarChart3, label: 'Academic Progress', path: '/parent/progress' },",
            "  { icon: CalendarDays, label: 'Calendar', path: '/parent/calendar' },",
            "  { icon: Bell, label: 'Notifications', path: '/parent/notifications' },",
            "  { icon: Bot, label: 'Parent AI Assistant', path: '/parent/ai-assistant' },",
            "  { icon: User, label: 'My Profile', path: '/parent/profile' }"
        ]
    }
}

layout_dir = os.path.join(components_dir, 'layout')

for role in roles:
    sidebar_code = sidebar_template.replace('{role}', role).replace('{icons}', role_nav_items[role]['icons']).replace('{nav_items}', '\n'.join(role_nav_items[role]['items']))
    # Fix the double brackets back to single brackets for React
    sidebar_code = sidebar_code.replace('{{', '{').replace('}}', '}')
    with open(os.path.join(layout_dir, f'{role}Sidebar.jsx'), 'w', encoding='utf-8') as f:
        f.write(sidebar_code)

    layout_code = layout_template.replace('{role}', role)
    layout_code = layout_code.replace('{{', '{').replace('}}', '}')
    with open(os.path.join(layout_dir, f'{role}Layout.jsx'), 'w', encoding='utf-8') as f:
        f.write(layout_code)

print("Layouts and sidebars created.")
