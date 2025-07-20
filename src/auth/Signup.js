import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';  // Import the CSS file for styling

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock signup logic
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    setSuccess('Signup successful! Redirecting...');

    // Redirect to login after a short delay
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="https://piktochart.com/wp-content/uploads/2024/05/piktoai-quote-5_64046130.png" alt="Signup" />
      </div>
      <form onSubmit={handleSignup} className="signup-form">
        <h1>Sign Up</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        
        <p>
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;