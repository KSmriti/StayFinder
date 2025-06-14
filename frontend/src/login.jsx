import React from 'react';
import './styles/Register.css';

function Login(){
    return (
    <div>
        <h1>Nice to have you back :)</h1>
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Login</button>
    
      </form>
    </div>
    </div>
  );

}

export default Login;