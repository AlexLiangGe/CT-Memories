import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(mode === 'login' ? 'Logging in...' : 'Registering...', {
      username,
      password,
      email,
    });
    if(email === '')  return alert('Email cannot be empty!');
    if(password === '')  return alert('Password cannot be empty!');
    if (mode === 'login') {
      const userList = JSON.parse(localStorage.getItem('userList')) || [];
      if (!userList.some(user => user.email === email)) {
        alert('Email does not exist!');
      } else if (!userList.some(user => user.password === password)) {
        alert('Password is incorrect!');
      } else if (userList.some(user => user.email === email && user.password === password)) {
        alert('Login successful!');
        navigate("/");
      } else {
        alert('Login failed!');
      }
    } else {
      const userList = JSON.parse(localStorage.getItem('userList')) || [];
      const userEmails = userList.map(user => user.email);
      if (userEmails.includes(email)) {
        alert('Email already exists!');
      } else {
        userList.push({ username, password, email });
        localStorage.setItem('userList', JSON.stringify(userList));
        alert('Registration successful!');
      }
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="login-container">
      <h1>{mode === 'login' ? 'Login' : 'Register'}</h1>
      <div className="form-box">
        {mode === 'login' && (
          <>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
          </>
        )}
        {mode === 'register' && (
          <>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
          </>
        )}
        <button onClick={handleSubmit} className="login-button">
          {mode === 'login' ? 'Sign In' : 'Register'}
        </button>
        <button onClick={toggleMode} className="switch-mode-button">
          Go To {mode === 'login' ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Login;