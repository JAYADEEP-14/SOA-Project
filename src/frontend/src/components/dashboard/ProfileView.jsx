import React from 'react';
import { User, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="fade-in">
      <div className="dashboard-header" style={{ marginBottom: '2rem' }}>
        <h1>My Profile</h1>
        <p className="subtitle">Manage your personal information and settings.</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-1" style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--grad-primary)', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={64} color="white" />
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>John Doe</h2>
          <span className="badge badge-ai" style={{ marginBottom: '1.5rem' }}>Active Member</span>
          <p style={{ color: 'var(--text-muted)' }}>ID: EDU-2026-8942</p>
        </div>
        
        <div className="card col-span-2">
          <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Contact Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Mail className="text-secondary" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</p>
                <p style={{ fontWeight: '500' }}>johndoe@example.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Phone className="text-success" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Phone</p>
                <p style={{ fontWeight: '500' }}>+1 234 567 890</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <MapPin className="text-danger" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Address</p>
                <p style={{ fontWeight: '500' }}>123 Campus Drive, Tech City</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1rem' }}>
              <Shield className="text-accent" size={20} />
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Security Level</p>
                <p style={{ fontWeight: '500' }}>Standard Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
