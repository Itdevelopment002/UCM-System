import React, { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    console.log("Dropdown toggled, current state:", isOpen); // Debug state change
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      {/* Logo */}
      <div className="header-logo">
        Unauthorized Construction Demolish Management System
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="form-control"
          placeholder="Search for anything..."
        />
      </div>

      {/* Language Selector */}
      <div className="language">
        <div className="language-selector" onClick={toggleDropdown}>
          <span>Language</span>
          <span className="dropdown-arrow">▼</span>
        </div>

        {/* Language dropdown */}
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Marathi</li>
            </ul>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <FaBell size={20} className="bell-icon" />

      {/* User Info */}
      <div className="user-info">
        <div className="user-name">
          Nishant Makam <br />
          <div style={{ color: '#333333' }}>Solapur, India</div>
        </div>
        <FaUserCircle size={30} className="user-icon" />
      </div>
    </div>
  );
};

export default Header;
