import React, { useState } from 'react';
import './Login.css'; // We'll create this CSS file next
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };
  const sign=()=>{
    navigator("/sign")
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        
        <button type="submit" className="login-button">Login</button>
        
        <div className="signup-link">
         <button onClick={sign}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;