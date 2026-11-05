import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, ArrowLeft, Bot } from 'lucide-react';
import '../../Auth.css';

export default function Signup() {
  const [role, setRole] = useState('STUDENT');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // In a real app, this would hit the registration API
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-form-section" style={{ flex: 1, borderRight: '1px solid var(--border)' }}>
        <div className="auth-card glass" style={{ maxWidth: '500px' }}>
          <div className="auth-header" style={{ textAlign: 'left' }}>
            <h2>Create Account</h2>
            <p>Join the next-generation intelligent campus.</p>
          </div>
          
          <form onSubmit={handleSignup} className="auth-form">
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="input" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="input" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="input" placeholder="john@edufusion.edu" required />
            </div>

            <div className="form-group">
              <label>Select Role</label>
              <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
                <option value="PARENT">Parent</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="input" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className="btn btn-primary login-btn">
              Register <UserPlus size={18} />
            </button>
          </form>
          
          <div className="auth-footer" style={{ marginTop: '1.5rem', textAlign: 'left' }}>
            <p>Already have an account? <span className="signup-link" onClick={() => navigate('/login')}><ArrowLeft size={14}/> Back to Login</span></p>
          </div>
        </div>
      </div>

      <div className="auth-visual" style={{ background: 'var(--bg-color)', position: 'relative' }}>
         {/* Simple visual background for signup right side */}
         <div className="ambient-light light-1"></div>
         <div className="visual-content">
           <Bot size={64} className="text-accent" style={{marginBottom: '1rem'}} />
           <h2 style={{fontSize:'2.5rem', marginBottom:'1rem'}}>EduFusion AI</h2>
           <p style={{fontSize:'1.1rem', opacity:0.8}}>Empowering educators and students with artificial intelligence.</p>
         </div>
      </div>
    </div>
  );
}
