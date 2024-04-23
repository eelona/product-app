import React, { useState } from 'react';
import { Navigation } from './Navigation';
import './login.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
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
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='buttons'>
          <button type="submit">Login</button>
          <button type="submit">Sign Up</button>
         </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
