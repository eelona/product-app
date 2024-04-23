import React, { useState } from 'react';
import { Navigation } from './Navigation';
import './login.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password :)');
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true); 
  };

  const handleCancelSignUp = () => {
    setShowSignUp(false); 
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert('Sign up functionality will be implemented here');
    setShowSignUp(false);
  };

  return (
    <div>
      <Navigation />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
          <div className="buttons">
            <button type="submit">Login</button>
            {!showSignUp && (
              <button type="button" onClick={handleSignUpClick}>
                Sign Up
              </button>
            )}
          </div>
        </form>
        {showSignUp && (
          <form onSubmit={handleSignUpSubmit}>
            <div>
              <label>New Username:</label>
              <input type="text" 
              placeholder='xxx@xxx.com'/>
            </div>
            <div>
              <label>New Password:</label>
              <input type="password" 
              placeholder='Password'/>
              
            </div>
            <div className="buttons">
              <button type="submit">Sign Up</button>
              <button type="button" onClick={handleCancelSignUp}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
