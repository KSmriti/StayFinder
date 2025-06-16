import React from 'react';
import './styles/header.css';  

function Header() {
  return (
    <div className="header-container">
      <div className="logo-name">
         <img src="/images/logo.png" alt="StayFinder Logo" className="logo-image" /> StayFinder
      </div>
      <input className="search-bar" type="text" placeholder="Search properties..." />
      <div className="profile-icon">
        <img src="/images/user.png" alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Header;
