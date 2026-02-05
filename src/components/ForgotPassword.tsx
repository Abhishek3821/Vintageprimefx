import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from 'axios';
 

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'danger', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      const res = await axios.post(`${API_URL}/forgot-password`, { email });
      setMessage({ type: 'success', text: res.data.message || 'Password reset email sent! Please check your inbox.' });
      setEmail(""); // Clear the email field after successful submission
    } catch (err) {
      const errorMsg = axios.isAxiosError(err) && err.response?.data?.message
        ? err.response.data.message
        : 'Failed to process your request. Please try again.';
      setMessage({ type: 'danger', text: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-background d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 rounded shadow text-center">
        <h2 className="mb-4 text-white">Forgot Password</h2>
        
        {message && (
          <Alert variant={message.type} dismissible onClose={() => setMessage(null)}>
            {message.text}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-dark w-100 mb-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
          <div className="text-center">
            <small className="text-white">
              Remember your password? <Link to="/login" className="text-info">Back to Login</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;