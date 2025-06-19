import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/header.css';  

function Header() {

  const [search, setSearch]=useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); 

  function handleSearch(e){
    if (e.key === 'Enter' && search.trim()) {
      navigate(`/search?query=${search.trim()}`);
    }
  };

  function handleLogout() {
    navigate('/login');
  };

  
  return (
    <div className="header-container">
      <div className="logo-name">
         <img src="/images/logo.png" alt="StayFinder Logo" className="logo-image" /> StayFinder
      </div>
      
      <input className="search-bar" type="text" placeholder="Search properties..." value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleSearch} />
      
      <div className="profile-icon" onMouseLeave={() => setShowDropdown(false)}
        onMouseEnter={() => setShowDropdown(!showDropdown)} >
        <img src="/images/user.png" alt="Profile" className="profile-image" />
        {showDropdown && (
          <div className="dropdown">
            <button onClick={handleLogout} >Logout</button>
          </div>
        )}
      </div>
    
    </div>
  );
}

export default Header;
