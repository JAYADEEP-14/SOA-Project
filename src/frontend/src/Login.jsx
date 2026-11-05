import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { LogIn, ArrowRight, Bot } from 'lucide-react';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    try {
      let role = 'STUDENT';
      if (email.toLowerCase().includes('admin')) role = 'ADMIN';
      else if (email.toLowerCase().includes('faculty')) role = 'FACULTY';
      else if (email.toLowerCase().includes('hod')) role = 'HOD';
      else if (email.toLowerCase().includes('parent')) role = 'PARENT';

      const userData = {
        name: email,
        role: role,
        token: 'mock-jwt-token'
      };
      
      await login(userData);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials or server offline.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-visual">
        <div className="visual-content">
          <div className="visual-icon"><Bot size={48} color="white" /></div>
          <h1>Welcome Back</h1>
          <p>Your intelligent campus starts here. Experience the future of education management with EduFusion AI.</p>
        </div>
        <div className="visual-overlay"></div>
      </div>
      
      <div className="auth-form-section">
        <div className="auth-card glass">
          <div className="auth-header">
            <h2>Sign In</h2>
            <p>Enter your credentials to access your portal</p>
          </div>
          
          {error && <div className="auth-alert">{error}</div>}
          
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="text" 
                className="input" 
                placeholder="faculty1 / student1" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="input" 
                placeholder="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="auth-actions">
              <label className="checkbox-container">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : 'Login'} <LogIn size={18} />
            </button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <span className="signup-link" onClick={() => navigate('/signup')}>Create Account <ArrowRight size={14}/></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
