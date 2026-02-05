import React, { createContext, useState, useEffect, ReactNode } from 'react';
// import axios from 'axios';
import { User, AuthContextType, RegisterData } from './types';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
const API_URL = '/mock-api'; // Mock API for demonstration

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load user data if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          // Simulate loading user data from mock storage
          const storedUser = localStorage.getItem('mock-user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
          } else {
            // Create a mock user if none exists
            const mockUser = {
              id: 'mock-user-id',
              email: 'demo@example.com',
              firstName: 'Demo',
              lastName: 'User',
              country: 'US',
              accountType: 'demo',
              balance: 10000
            };
            setUser(mockUser);
            localStorage.setItem('mock-user', JSON.stringify(mockUser));
            setIsAuthenticated(true);
          }
        } catch (err) {
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
          setIsAuthenticated(false);
          setError('Authentication failed. Please login again.');
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, [token]);

  // Register user
  const register = async (userData: RegisterData) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create mock registration response
      const mockToken = `mock-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const mockUser = {
        id: `mock-user-${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        country: userData.country,
        accountType: 'demo',
        balance: 10000
      };
      
      localStorage.setItem('token', mockToken);
      localStorage.setItem('mock-user', JSON.stringify(mockUser));
      setToken(mockToken);
      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Login user
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Create mock login response
      const mockToken = `mock-token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const mockUser = {
        id: `mock-user-${Date.now()}`,
        email: email,
        firstName: 'Demo',
        lastName: 'User',
        country: 'US',
        accountType: 'demo',
        balance: 10000
      };
      
      localStorage.setItem('token', mockToken);
      localStorage.setItem('mock-user', JSON.stringify(mockUser));
      setToken(mockToken);
      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (err) {
      setError('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Export the context for use in the hook file
export { AuthContext };