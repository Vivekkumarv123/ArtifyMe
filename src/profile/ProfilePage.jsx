import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './ProfilePage.css';  // Import CSS

function ProfilePage() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {user?.name || 'User'}!</h1>
        <p>Explore your order history and manage your account.</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h2>Order History</h2>
          <p>Track and view your past orders.</p>
          <Link to="/order-history" className="profile-link">View Order History</Link>
        </div>

        <div className="profile-card">
          <h2>Account Settings</h2>
          <p>Manage your account information and preferences.</p>
          <button className="profile-link" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
