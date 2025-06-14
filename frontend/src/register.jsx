import React, { useState } from 'react';
import './styles/Register.css'; 
import { Link } from "react-router-dom";

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  
    const handleSubmit = async (e) => {
    e.preventDefault();     
    const userData = { username, password }; 

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData) 
      });

      const result = await response.json(); 
      console.log(result);
      alert('User registered!');
    } catch (err) {
      console.error('Error:', err); 
    }
  };

  function handleUserNameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
        <h1>Welcome to StayFinder !!</h1>
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUserNameChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>

        <button type="submit">Register</button>
        <p className="login-link">
           <Link to="/login">Already Registered? Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Register;
