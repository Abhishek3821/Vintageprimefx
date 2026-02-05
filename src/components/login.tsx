import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, error, clearError, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await login(email, password);
      // Navigation will happen automatically due to the useEffect above
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-700 to-emerald-500 p-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg text-center p-6 w-full max-w-md border border-white/20">
        <h2 className="mb-4 text-white text-2xl font-bold">LOGIN</h2>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded mb-4 relative">
            <span>{error}</span>
            <button 
              onClick={clearError}
              className="absolute top-1 right-2 text-white hover:text-gray-200"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full font-semibold transition duration-200 mb-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" role="status" aria-hidden="true"></span>
                Signing in...
              </>
            ) : (
              "SIGN IN"
            )}
          </button>
          <div className="flex justify-between">
            <small className="text-white text-sm">
              <Link to="/register" className="text-cyan-300 hover:text-cyan-200">Create Account</Link>
            </small>
            <small className="text-white text-sm">
              <Link to="/forgot-password" className="text-cyan-300 hover:text-cyan-200">Forgot Password?</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
