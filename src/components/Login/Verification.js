import React from "react"; 
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import flash from "../../images/flash.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import logo from "../../images/logo.png";
import bg from "../../images/signup-bg.jpg";
import "./Login.css";

const Verification = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleConfirmClick = () => {
    // Navigate to the dashboard route
    navigate("/dashboard/form");
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: `url(${bg}) center center / cover no-repeat`, // Set the background image
        position: "relative",
      }}
    >
      <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
        <div className="col-12 vh-95 bg-white col-md-6 p-5 mx-auto">
          {/* Left Section */}
          <div className=" mx-auto p-2 d-flex flex-column justify-content-center align-items-center">
            <img
              src={logo}
              alt="Ward Logo"
              className="login-logo img-fluid rounded mb-4"
            />
            <h2 className="fw-bold mb-3 text-center">VERIFICATION CODE</h2>
            <p className="text-dark text-center mb-5 w-100">
              We have sent the verification code to your email address
            </p>
            <form className="w-60 mt-2 text-center">
              <div className="d-flex justify-content-between otp-input-group mb-5">
                {[...Array(4)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="form-control text-center otp-input"
                  />
                ))}
              </div>
              <button
                type="button" // Add type="button" to prevent form submission
                className="btn custom-btn fw-bold mt-3 mb-5 button-log-page"
                style={{ maxWidth: "150px", width: "90%" }}
                onClick={handleConfirmClick} // Call handleConfirmClick on button click
              >
                Confirm
              </button>
            </form>
          </div>
        </div>

        {/* Right Section - Promo */}
        <div
          className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: `url(${texture}) center center / cover no-repeat`,
          }}
        >
          <div className="d-flex flex-column align-items-center" style={{ width: "80%", padding: "2rem", margin: "0 auto" }}>
            <img
              src={overlay}
              alt="Overlay"
              style={{ width: "100%", display: "block" }}
            />
            <h3
              className="col-4 w-4 fw-bold "
              style={{
                position: "absolute",
                top: "49%",
                left: "52%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                color: "#fff",
                textAlign: "left",
                lineHeight: "1.5",
                fontSize:"30px",
              }}
            >
              Very good works are waiting for you. Login Now!!!
            </h3>
          </div>
          <img
            src={flash}
            alt="Flash"
            className="position-absolute p-5 flash"
          />
        </div>
      </div>
    </div>
  );
};

export default Verification;
