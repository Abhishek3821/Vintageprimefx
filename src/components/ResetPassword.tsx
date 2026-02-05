import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'danger', text: string } | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Extract token from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const resetToken = queryParams.get('token');
    if (resetToken) {
      setToken(resetToken);
    } else {
      setMessage({ 
        type: 'danger', 
        text: 'Invalid password reset link. Please request a new password reset.' 
      });
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage({ type: 'danger', text: 'Passwords do not match.' });
      return;
    }

    // Validate password strength
    if (password.length < 8) {
      setMessage({ type: 'danger', text: 'Password must be at least 8 characters long.' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);
    
    try {
      const res = await axios.post(`${API_URL}/reset-password`, { 
        token, 
        password 
      });
      
      setMessage({ 
        type: 'success', 
        text: res.data.message || 'Password has been reset successfully!' 
      });
      
      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
      
    } catch (err) {
      const errorMsg = axios.isAxiosError(err) && err.response?.data?.message
        ? err.response.data.message
        : 'Failed to reset password. Please try again.';
      setMessage({ type: 'danger', text: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-background d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 rounded shadow text-center">
        <h2 className="mb-4 text-white">Reset Password</h2>
        
        {message && (
          <Alert variant={message.type} dismissible={message.type === 'danger'} onClose={() => message.type === 'danger' ? setMessage(null) : null}>
            {message.text}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input 
              type="password" 
              className="form-control" 
              placeholder="New Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!token || isSubmitting}
            />
          </div>
          <div className="form-group mb-4">
            <input 
              type="password" 
              className="form-control" 
              placeholder="Confirm New Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={!token || isSubmitting}
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-dark w-100 mb-3"
            disabled={!token || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Resetting Password...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;