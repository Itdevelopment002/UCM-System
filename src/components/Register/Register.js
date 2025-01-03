import React from "react";

import worker from "../../images/workman-shouting-white-background-removebg-preview 1.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import flash from "../../images/flash.png";

import "./Register.css";

const Register = () => {
  return (
    <div className="container-fluid w-100 vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-90 w-md-80 shadow-lg rounded overflow-hidden">
      
        {/* Left Side - Register Form */}
        <div className="col-12 col-md-6 bg-white p-5 d-flex flex-column justify-content-center align-items-center">
          {/* <img
            src={logo}
            alt="Ward Logo"
            className="w-auto mb-4"
            style={{ width: "120px" }}
          /> */}
          <h2 className="fw-bold mb-3">REGISTER</h2>
          <p className="text-muted mb-4">Let's Create Your Account</p>
          <form className="w-100 p-5">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
              />
              <label className="form-check-label" htmlFor="terms">
                I Agree To The Terms & Conditions
              </label>
            </div>
            <button className="btn btn-primary w-100 mb-3">Sign Up</button>
          </form>
        </div>

        {/* Right Side - Promotional Section */}
        <div
          className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: `url(${texture}) center center / cover no-repeat`,
          }}
        >
          <div className="justify-content-center align-items-center d-flex flex-column"> 
            <div style={{ position: "relative", width: "90%", padding: "2rem", margin: "0 auto" }}>
              <img 
                src={overlay} 
                alt="Overlay" 
                style={{ width: "100%", display: "block" }} 
              />
              <h3 className="w-5 fw-bold justify-content-left align-items-left"
                style={{
                  position: "absolute",
                  top: "47%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "left",
                  lineHeight: "1.5",
                }}
              >
                Join Us Today! <br/>
                Opportunities <br/>Await <br/>
                - Register Now!
              </h3>
            </div>
            <img
              src={worker}
              alt="Worker"
              className="position-absolute justify-content-center align-items-center bottom-0 end-0 w-100 p-5 man-image"/>
            <img src={flash} alt="flash" className="position-absolute justify-content-center align-items-center p-5 flash"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
