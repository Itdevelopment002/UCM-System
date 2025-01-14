import React, { useState } from "react";
import flash from "../../images/flash.png";
import logo from "../../images/logo.png";
import overlay from "../../images/overlay.png";
import worker from "../../images/register-man.png";
import texture from "../../images/texture.png";
import bg from "../../images/signup-bg.jpg"; // Imported background image
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = { ...errors };
  
    // First Name Validation
    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "First name is required and should only contain alphabets.";
    } else {
      newErrors.firstName = "";
    }
  
    // Last Name Validation (Remove required field check)
    if (lastName && !/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Last name should only contain alphabets.";
    } else {
      newErrors.lastName = "";
    }
  
    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    } else {
      newErrors.email = "";
    }
  
    // Password Validation
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    } else {
      newErrors.password = "";
    }
  
    // Terms and Conditions Validation
    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions.";
    } else {
      newErrors.agreeTerms = "";
    }
  
    setErrors(newErrors);
  
    // Check if there are any errors
    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.agreeTerms
    ) {
      // Proceed with form submission logic, e.g., API call
      console.log("Form submitted successfully!");
    }
  };
  
  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
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
          background: "rgba(0, 0, 0, 0.3)", // Dark overlay with opacity
          zIndex: 1, // Ensure it stays behind the form content
        }}
      />

      <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
        {/* Left Section */}
        <div className="w-85 w-md-75 col-12 col-md-6 mx-auto p-5 bg-white d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" className="login-logo img-fluid mb-4" />
          <h2 className="fw-bold text-center">REGISTER</h2>
          <p className="text-muted text-center mb-4 w-100">
            Let's Create Your Account
          </p>
          <form className="w-100 p-2  d-block align-items-center" 
          onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className={`form-control input-check-reg ${errors.firstName ? "is-invalid" : ""}`}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>

            <div className="form-group mb-3">
              <input
                type="text"
                className={`form-control input-check-reg ${errors.lastName ? "is-invalid" : ""}`}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                className={`form-control input-check-reg ${errors.email ? "is-invalid" : ""}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className={`form-control input-check-reg ${errors.password ? "is-invalid" : ""}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className={`form-check-input ${errors.agreeTerms ? "is-invalid" : ""}`}
                id="termsCheck"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I Agree To The Terms & Conditions
              </label>
              {errors.agreeTerms && (
                <div className="invalid-feedback" style={{ display: "block" }}>
                  {errors.agreeTerms}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn custom-btn fw-bold mt-2 register-button"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/Otp" className="signin-link">
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
                fontSize: "30px",
              }}
            >
              Join Us Today! <br /> Opportunities Await <br />– Register Now!!
            </h3>
          </div>
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
