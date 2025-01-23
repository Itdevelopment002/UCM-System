import React, { useState } from "react";
import flash from "../../images/flash.png";
import logo from "../../images/logo.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import bg from "../../images/signup-bg.jpg";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    agreeTerms: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { ...errors };

    
    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "This is a required field.";
    } else {
      newErrors.firstName = "";
    }

    if (lastName && !/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Last name should only contain alphabets.";
    } else {
      newErrors.lastName = "";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    } else {
      newErrors.phoneNumber = "";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    } else {
      newErrors.password = "";
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions.";
    } else {
      newErrors.agreeTerms = "";
    }

    setErrors(newErrors);

    if (
      !newErrors.firstName &&
      !newErrors.lastName &&
      !newErrors.phoneNumber &&
      !newErrors.password &&
      !newErrors.agreeTerms
    ) {
      setSuccessMessage("Registration successful! Please proceed to SignIn.");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: `url(${bg}) center center / cover no-repeat`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
        }}
      />

      <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
        <div className="w-85 w-md-75 col-12 col-md-6 mx-auto p-5 bg-white d-flex flex-column align-items-center">
          <img src={logo} alt="Logo" className="login-logo img-fluid mb-4" />
          <h2 className="fw-bold text-center">REGISTER</h2>

          {/* Success message or tagline */}
          {successMessage ? (
            <div className="alert alert-success mb-3 w-100 signin-alert">
              {successMessage} 
            </div>
          ) : (
            <p className="text-muted text-center mb-4 w-100">
              Let's Create Your Account
            </p>
          )}

          <form className="w-100 p-2 d-block align-items-center" onSubmit={handleSubmit}>
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
                type="text"
                className={`form-control input-check-reg ${errors.phoneNumber ? "is-invalid" : ""}`}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
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
              <label className="form-check-label " htmlFor="termsCheck">
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

          {/* "Already have an account" tagline */}
          <p className="mt-2">
            Already have an account?{" "}
            <a href="/Otp" className="signin-link">
              Sign In
            </a>
          </p>
        </div>
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
