import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';  // Use the Auth context
import './Login.css';  // Import the CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();  // Get the login function from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage, handle invalid JSON
    let storedUser = null;
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        storedUser = JSON.parse(userStr);
      } catch (err) {
        setError('Stored user data is corrupted. Please sign up again.');
        return;
      }
    }

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Call login function from the context
      login(storedUser);

      // Show success alert
      setSuccess('Login successful! Redirecting...');

      // Navigate to the homepage after a short delay
      setTimeout(() => {
        navigate('/');
      }, 1500);  // Delay for the success message to be visible
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="https://static.vecteezy.com/system/resources/previews/037/170/288/non_2x/ai-generated-intimate-corner-with-cushions-candles-and-love-quotes-free-photo.jpg" alt="Login" />
        <div className="quote-overlay">
          <p>"A ROOM SHOULD <br /> NEVER ALLOW THE <br /> EYE TO SETTLE IN <br /> ONE PLACE."</p>
      </div>
    </div>

      <form onSubmit={handleLogin} className="login-form">
        <h1>Log In</h1>
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
        <button type="submit">Log In</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
        <p>
          <Link to="/forgotpassword">Forgot your password?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;