import React from 'react';
import './styles/Register.css'; 
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
        <h1>Welcome to StayFinder !!</h1>
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
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
