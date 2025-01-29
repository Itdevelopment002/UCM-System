import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';  // Add home icon
import './Header.css';
import { Link } from 'react-router-dom';
import Notification from '../../images/notification.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Default is logged in
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // User dropdown hidden by default
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false); // Language dropdown is hidden by default
  const { t, i18n } = useTranslation();

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);  // Log out the user and show login button
    setIsUserDropdownOpen(false); // Close the dropdown after logout
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen); // Toggle user dropdown visibility
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen); // Toggle language dropdown visibility
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangDropdownOpen(false); // Close the language dropdown when a language is selected
  };

  return (
    <div className="header-container">
      <div className="col-md-6 header-logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#5038ED' }}>
          {t('form.unauthorizedDemolishManagement')}
        </Link>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center gap-bw-each">
        {/* Home Icon to navigate back to the landing page */}
        <Link to="/" className="home-icon">
          <FaHome size={30}  style={{fill:"#5038ed"}}/>
        </Link>

        <div className="language">
          <div className="language-selector" onClick={toggleLangDropdown}>
            <span className="input-small">Language</span>
            {isLangDropdownOpen ? (
              <HiOutlineChevronUp size={18} className="dropdown-arrow" />
            ) : (
              <HiOutlineChevronDown size={18} className="dropdown-arrow" />
            )}
          </div>
          {isLangDropdownOpen && (
            <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <ul>
                <li onClick={() => changeLanguage('en')}>English</li>
                <li onClick={() => changeLanguage('hi')}>हिंदी</li>
                <li onClick={() => changeLanguage('mr')}>मराठी</li>
              </ul>
            </div>
          )}
        </div>

        <div className="bell-icon">
          <img src={Notification} alt="notify" />
          <div className="notification-dot"></div>
        </div>

        <div className="user-info">
          {isLoggedIn ? (
            <>
              <div className="user-name">
                {t('form.xyzUser')} <br />
                <div style={{ color: '#333333' }}>{t('form.solapurIndia')}</div>
              </div>
              <FaUserCircle size={30} className="user-icon" onClick={toggleUserDropdown} />
              {/* User dropdown menu */}
              {isUserDropdownOpen && (
                <div className="user-dropdown-menu">
                  <ul>
                    <li>View Profile</li>
                    <li>Settings</li>
                    <li>Change Password</li>

                    <li>Contact Support</li>


                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <button onClick={handleLogin} className="login-btn-header">Log in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
