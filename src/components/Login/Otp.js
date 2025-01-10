import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for routing
import facebook from "../../images/facebook.png";
import flash from "../../images/flash.png";
import google from "../../images/google.png";
import worker from "../../images/building-image.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import logo from "../../images/logo.png";
import "./Login.css";

const Otp = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook for navigation
  const [emailOrPhone, setEmailOrPhone] = useState("");

  // Handle form submission and redirect to verification page
  const handleContinue = (e) => {
    e.preventDefault();
    if (emailOrPhone) {
      // Navigate to the verification page
      navigate("/verification");
    } else {
      alert("Please enter a valid email or phone number.");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
        <div className="col-12 col-md-6 bg-white p-5 d-flex flex-column justify-content-center align-items-center">
          <img
            src={logo}
            alt="Ward Logo"
            className="login-logo img-fluid rounded mb-4"
          />
          <h2 className="fw-bold mb-3">OTP VERIFICATION</h2>
          <p className="text-dark text-center mb-4">
            Enter Credentials to get One Time Password
          </p>
          <form className="w-75 text-center" onSubmit={handleContinue}>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control mx-auto"
                  placeholder="Email address or phone number"
                  style={{ maxWidth: "300px", maxHeight: "50px" }}
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)} // Update state
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn custom-btn fw-bold mt-3"
            >
              Continue
            </button>
            <hr />
            <p className="text-dark">
              <b>Login</b> with Others
            </p>
            <button
              className="btn btn-outline-light mb-2 d-flex align-items-center justify-content-center mx-auto text-dark"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <img src={google} alt="Google" className="me-2" />
              Login with &nbsp;<b> Google</b>
            </button>
            <button
              className="btn btn-outline-light d-flex align-items-center justify-content-center mx-auto text-dark"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <img src={facebook} alt="Facebook" className="me-2" />
              Login with &nbsp;<b> Facebook</b>
            </button>
          </form>
        </div>

        {/* Right Section - Promo */}
        <div
          className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: `url(${texture}) center center / cover no-repeat`,
          }}
        >
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "80%", padding: "2rem", margin: "0 auto" }}
          >
            <img
              src={overlay}
              alt="Overlay"
              style={{ width: "97%", display: "block" }}
            />
            <h3
              className="col-5 w-4 fw-bold"
              style={{
                position: "absolute",
                top: "44%",
                left: "45%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                color: "#fff",
                textAlign: "left",
                lineHeight: "1.5",
              }}
            >
              Very good works are waiting for you. Login Now!
            </h3>
          </div>
          <img
            src={worker}
            alt="Worker"
            className="position-absolute bottom-0 end-0 p-5 building-image"
          />
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

export default Otp;
