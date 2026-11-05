import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import './Landing.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <nav className="landing-nav">
        <div className="logo"><Bot size={28} className="text-accent" /> EduFusion AI</div>
        <div className="nav-actions">
          <button className="btn btn-outline" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-primary" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content fade-in">
          <div className="hero-badge">Next-Generation Campus Management</div>
          <h1 className="hero-title">
            The Intelligent Campus,<br/>
            <span className="text-gradient">Powered by AI.</span>
          </h1>
          <p className="hero-subtitle">
            Unify attendance, resource allocation, infrastructure monitoring, and student success predictions into one seamless platform.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/signup')}>
              Launch Your Campus <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card glass">
            <div className="feature-icon bg-primary-light"><Zap className="text-accent" /></div>
            <h3>Smart Allocation</h3>
            <p>AI-driven resource booking and infrastructure monitoring for optimal efficiency.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon bg-primary-light"><BarChart3 className="text-secondary" /></div>
            <h3>Predictive Analytics</h3>
            <p>Anticipate student success and intervene early with our ML risk models.</p>
          </div>
          <div className="feature-card glass">
            <div className="feature-icon bg-primary-light"><ShieldCheck className="text-success" /></div>
            <h3>Role-Based Access</h3>
            <p>Dedicated portals for Admins, Faculty, Students, and Parents.</p>
          </div>
        </div>
      </main>
      
      <div className="ambient-light light-1"></div>
      <div className="ambient-light light-2"></div>
    </div>
  );
}
