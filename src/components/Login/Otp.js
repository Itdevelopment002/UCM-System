import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import facebook from "../../images/facebook.png";
import flash from "../../images/flash.png";
import google from "../../images/google.png";
import logo from "../../images/logo.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import bg from "../../images/vintage-bg.jpg";
import "./Login.css"; 

const phoneRegex = /^[0-9]{10}$/;

const Otp = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [isError, setIsError] = useState(false);
  const [warning, setWarning] = useState("");

 const handleChange = (e) => {
    const value = e.target.value;

    // Allow only numeric values and up to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
      setWarning(""); // Clear warning when valid
    } else {
      setWarning("Please enter a valid 10-digit phone number.");
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();

    // Check if the phone number is exactly 10 digits
    if (!phoneRegex.test(phone)) {
      setWarning("Please enter 10-digit phone number only.");
    } else {
      setWarning("");
      navigate("/verification");
    }
  };

  return (
    <div
      className="otp-container"
      style={{
        background: `url(${bg}) center center / cover no-repeat`,
        position: "relative",
      }}
    >
      <div className="otp-wrapper d-flex ">
        <div className="otp-form  text-center align-items-center justify-content-center">
          <img
            src={logo}
            alt="Ward Logo"
            className="otp-logo"
          />
          <h2 className="fw-bold mb-3">OTP VERIFICATION</h2>
          <p className="text-dark text-center mb-4">
            Enter your phone number to receive a One-Time Password
          </p>
          <form className="w-75 text-center" onSubmit={handleContinue}>
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className={`form-control input-check-reg mx-auto align-items-center ${
                    isError ? "border-danger" : ""
                  }`}
                  placeholder="Phone number"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "50px",
                    borderWidth: isError ? "2px" : "1px",
                  }}
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              
              {warning && (
                <p className="text-danger mt-2 warning-otp">{warning}</p>
              )}
              {/* {isError && !warning && (
                <p className="text-danger mt-2">
                  Please enter a valid 10-digit phone number.
                </p>
              )} */}
            </div>

            <button
              type="submit"
              className="btn fw-bold mt-3 mb-3 otp-button"
            >
              Continue
            </button>

            <p className="text-dark mb-2">
              <b>Login</b> with Others
            </p>
            <div className=" ">
            <button
              className=" social-button btn btn-outline-light mb-2 d-flex align-items-left justify-content-center mx-auto text-dark"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <img src={google} alt="Google" className="me-2" />
              Login with &nbsp;<b> Google</b>
            </button>
            <button
              className=" social-button btn btn-outline-light d-flex align-items-left justify-content-center mx-auto text-dark"
              style={{ maxWidth: "300px", width: "100%" }}
            >
              <img src={facebook} alt="Facebook" className="me-2" />
              Login with &nbsp;<b> Facebook</b>
            </button>
            </div>
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
            <h3 className="otp-promo-text">
              Very good works are waiting for you. <br/>-Login Now!!!
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

export default Otp;