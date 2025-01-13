import React from "react";
import flash from "../../images/flash.png";
import logo from "../../images/logo.png";
import overlay from "../../images/overlay.png";
import worker from "../../images/register-man.png";
import texture from "../../images/texture.png";
import bg from "../../images/signup-bg.jpg"; // Imported background image
import "./Register.css";

const Register = () => {
  return (
    <div
      className="container-fluid vh-90 p-5 d-flex align-items-center justify-content-center"
      style={{
        background: `url(${bg}) center center / cover no-repeat`, // Set the imported bg as background
        position: "relative",
      }}
    >
      {/* Background Overlay for Opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Dark overlay with opacity
          zIndex: 1, // Ensure it stays behind the form content
        }}
      />
      
      <div
        className="row w-90 w-md-75 shadow-lg rounded overflow-hidden login"
        style={{
          position: "relative",
          zIndex: 2, // Ensure the form content is above the background and overlay
        }}
      >
        {/* Left Section */}
        <div className="col-12 col-md-6  p-5 bg-white d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" className="login-logo img-fluid mb-4" />
          <h2 className="fw-bold text-center">REGISTER</h2>
          <p className="text-muted text-center mb-4 w-100">
            Let's Create Your Account
          </p>
          <form className="w-70 mx-auto">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-check-reg"
                placeholder="First Name"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-check-reg"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control input-check-reg"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control input-check-reg"
                placeholder="Password"
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheck"
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I Agree To The Terms & Conditions
              </label>
            </div>
          </form>
          <button
            type="submit"
            className="btn custom-btn fw-bold mt-2 register-button-landing-page"
          >
            Sign Up
          </button>
          <p className="mt-3">
            Already have an account?{" "}
            <a href="/Otp" className="signin-link ">
              Sign In
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div
          className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: `url(${texture}) center center / cover no-repeat`,
          }}
        >
          <div
            className="d-flex flex-column align-items-center"
            style={{ width: "88%", padding: "2rem", margin: "0 auto" }}
          >
            <img
              src={overlay}
              alt="Overlay"
              style={{ width: "100%", display: "block" }}
            />
            <h3
              className="col-6 w-28"
              style={{
                position: "absolute",
                top: "49%",
                left: "51%",
                transform: "translate(-50%, -50%)",
                fontWeight: "700",
                color: "#fff",
                textAlign: "left",
                lineHeight: "1.5",
                fontSize: "28px",
              }}
            >
              Join Us Today! <br /> Opportunities Await <br />– Register Now!
            </h3>
          </div>
          {/* <img
            src={worker}
            alt="Worker"
            className="position-absolute justify-content-center align-items-center bottom-0 end-0 man-image-reg"
          /> */}
          <img
            src={flash}
            alt="Flash"
            className="position-absolute p-5 flash-reg"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
