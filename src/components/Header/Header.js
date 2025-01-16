import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa"; // Keep Fa for other icons
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5"; // For dropdown arrows
import "./Header.css";
import { Link } from "react-router-dom";
import Notification from "../../images/notification.png";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi"; // Outlined caret icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <div className="col-md-6 header-logo">
      <Link to="/" style={{ textDecoration: 'none' , color:"#5038ED"}}>Unauthorized Construction Demolish Management System</Link>
      </div>
      <div className="col-md-6 d-flex justify-content-end align-items-center">
        {/* Search Bar */}
        {/* <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search for anything..."
            
          />
          <FaSearch size={18} className="search-icon" />
        </div> */}

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
    <div
      className="dropdown-menu"
      onClick={(e) => e.stopPropagation()} /* Prevent click issues */
    >
      <ul>
        <li onClick={() => console.log("English selected")}>English</li>
        <li onClick={() => console.log("Hindi selected")}>Hindi</li>
        <li onClick={() => console.log("Marathi selected")}>Marathi</li>
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
        <div className="user-info ">
          <div className="user-name">
            XYZ user  <br />
            <div style={{ color: "#333333" }}>Solapur, India</div>
          </div>
          <FaUserCircle size={30} className="user-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
