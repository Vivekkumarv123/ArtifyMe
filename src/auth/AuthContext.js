// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On component mount, check if the user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsAuthenticated(true);
    }
  }, []);

  // Login method (to be called after successful login)
  const login = (user) => {
    localStorage.setItem('user', JSON.stringify(user));  // Save user info in localStorage
    setIsAuthenticated(true);
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);