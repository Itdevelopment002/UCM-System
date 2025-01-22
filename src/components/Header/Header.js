// Header.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import './Header.css';
import { Link } from 'react-router-dom';
import Notification from '../../images/notification.png';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="header-container">
      <div className="col-md-6 header-logo">
        <Link to="/" style={{ textDecoration: 'none', color: '#5038ED' }}>
          {t('form.unauthorizedDemolishManagement')}
        </Link>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        {/* Language Selector */}
        <div className="language">
          <div className="language-selector" onClick={toggleDropdown}>
            <span className="input-small">Language</span>
            {isOpen ? (
              <HiOutlineChevronUp size={18} className="dropdown-arrow" />
            ) : (
              <HiOutlineChevronDown size={18} className="dropdown-arrow" />
            )}
          </div>
          {isOpen && (
            <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <ul>
                <li onClick={() => changeLanguage('en')}>English</li>
                <li onClick={() => changeLanguage('hi')}>हिंदी</li>
                <li onClick={() => changeLanguage('mr')}>मराठी</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Notification Icon */}
        <div className="bell-icon">
          <img src={Notification} alt="notify" />
          <div className="notification-dot"></div>
        </div>

        {/* User Info */}
        <div className="user-info">
          <div className="user-name">
            {t('form.xyzUser')} <br />
            <div style={{ color: '#333333' }}>{t('form.solapurIndia')}</div>
          </div>
          <FaUserCircle size={30} className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
