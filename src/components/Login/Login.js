import React from "react";
import facebook from "../../images/facebook.png";
import flash from "../../images/flash.png";
import google from "../../images/google.png";
import worker from "../../images/login-man.png";
import overlay from "../../images/overlay.png";
import texture from "../../images/texture.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate('/dashboard/form'); // Navigate to the dashboard route
  };
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
      
      
        <div className="col-12 col-md-6 bg-white p-5 d-flex flex-column justify-content-center align-items-center">

        {/* <img
            src={logo}
            alt="Ward Logo"
            className="w-auto mb-4"
          /> */}
          <h2 className="fw-bold mb-3">LOGIN</h2>
          <p className="text-muted mb-4">
            Access Your Ward Office, Anytime, Anywhere.
          </p>
          <form className="w-80">
            <div className="mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
      className="btn btn-primary w-40 mb-3"
      onClick={handleClick} // Call handleClick when the button is clicked
    >
      Login Now
    </button>
            <p className="fw-bold text-center">Login with Others</p>
            <button className="btn btn-outline-light w-100 mb-2">
              <img
                src={google}
                alt="Google"
                className="me-2"
              />
              Login with Google
            </button>
            <button className="btn btn-outline-light w-100">
              <img
                src={facebook}
                alt="Facebook"
                className="me-2"
              />
              Login with Facebook
            </button>
          </form>
        </div>

       
        <div
          className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            background: `url(${texture}) center center / cover no-repeat`,
          }}
        >
          <div className="justify-content-center align-items-center d-flex flex-column"> 
          <div style={{ position: "relative", width: "80%", padding: "2rem", margin: "0 auto" }}>

  <img 
    src={overlay} 
    alt="Overlay" 
    style={{ width: "97%", display: "block" }} 
  />

 
  <h3 className="col-6 w-5 fw-bold"
    style={{
      position: "absolute",
      top: "47%",
      left: "35%",
      transform: "translate(-50%, -50%)",
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
      lineHeight: "1.5",
    }}
  >
    Very good
    works are 
    waiting for you. 
    Login Now!
  </h3>
</div>


          <img
            src={worker}
            alt="Worker"
            className="position-absolute justify-content-center align-items-center bottom-0 end-0 w-100 p-5 worker-image"/>
            <img src={flash} alt="flash" className="position-absolute justify-content-center align-items-center p-5 flash"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
