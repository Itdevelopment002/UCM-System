
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import facebook from "../../images/facebook.png";
// import flash from "../../images/flash.png";
// import google from "../../images/google.png";
// import logo from "../../images/logo.png";
// import overlay from "../../images/overlay.png";
// import texture from "../../images/texture.png";
// import bg from "../../images/vintage-bg.jpg";
// import "./Login.css"; // Use login.css for styling consistency
// import "../../components/Register/Register.css";

// const phoneRegex = /^[0-9]{10}$/;

// const Otp = () => {
//   const navigate = useNavigate();
//   const [phone, setPhone] = useState("");
//   const [isError, setIsError] = useState(false);
//   const [warning, setWarning] = useState(""); // State for warning message

//   const handleChange = (e) => {
//     const value = e.target.value;
//     // Allow only numeric values
//     if (/^\d*$/.test(value)) {
//       setPhone(value);
//       setWarning(""); // Clear the warning if input is valid
//     } else {
//       setWarning("Only numeric values are allowed."); // Set warning for invalid input
//     }
//   };

//   const handleContinue = (e) => {
//     e.preventDefault();

//     if (!phoneRegex.test(phone)) {
//       setIsError(true); // Show red border if invalid
//     } else {
//       setIsError(false); // Clear error
//       setWarning(""); // Clear warning
//       navigate("/verification"); // Redirect to verification page
//     }
//   };

//   return (
//     <div
//       className="container-fluid vh-100 d-flex align-items-center justify-content-center"
//       style={{
//         background: `url(${bg}) center center / cover no-repeat`, // Set the background image
//         position: "relative",
//       }}
//     >
//       <div className="row w-85 w-md-75 shadow-lg rounded overflow-hidden login">
//         <div className="col-12 col-md-6 bg-white p-5 d-flex flex-column justify-content-center align-items-center">
//           <img
//             src={logo}
//             alt="Ward Logo"
//             className="login-logo img-fluid rounded mb-4"
//           />
//           <h2 className="fw-bold mb-3">OTP VERIFICATION</h2>
//           <p className="text-dark text-center mb-4">
//             Enter your phone number to receive a One-Time Password
//           </p>
//           <form className="w-75 text-center" onSubmit={handleContinue}>
//             <div className="mb-3">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className={`form-control input-check-reg mx-auto align-items-center ${
//                     isError ? "border-danger" : ""
//                   }`}
//                   placeholder="Phone number"
//                   style={{
//                     maxWidth: "300px",
//                     maxHeight: "50px",
//                     borderWidth: isError ? "2px" : "1px",
//                   }}
//                   value={phone}
//                   onChange={handleChange}
//                 />
//               </div>
//               {warning && (
//                 <p className="text-warning mt-2">{warning}</p> // Display warning for invalid input
//               )}
//               {isError && !warning && (
//                 <p className="text-danger mt-2">
//                   Please enter a valid 10-digit phone number.
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               className="btn custom-btn fw-bold mt-3 mb-3 button-log-page"
//             >
//               Continue
//             </button>

//             <p className="text-dark mb-2">
//               <b>Login</b> with Others
//             </p>
//             <button
//               className="btn btn-outline-light mb-2 d-flex align-items-center justify-content-center mx-auto text-dark"
//               style={{ maxWidth: "300px", width: "100%" }}
//             >
//               <img src={google} alt="Google" className="me-2" />
//               Login with &nbsp;<b> Google</b>
//             </button>
//             <button
//               className="btn btn-outline-light d-flex align-items-center justify-content-center mx-auto text-dark"
//               style={{ maxWidth: "300px", width: "100%" }}
//             >
//               <img src={facebook} alt="Facebook" className="me-2" />
//               Login with &nbsp;<b> Facebook</b>
//             </button>
//           </form>
//         </div>

//         {/* Right Section - Promo */}
//         <div
//           className="col-12 col-md-6 position-relative promo-section text-white d-flex flex-column justify-content-center align-items-center"
//           style={{
//             background: `url(${texture}) center center / cover no-repeat`,
//           }}
//         >
//           <div
//             className="d-flex flex-column align-items-center"
//             style={{ width: "80%", padding: "2rem", margin: "0 auto" }}
//           >
//             <img
//               src={overlay}
//               alt="Overlay"
//               style={{ width: "97%", display: "block" }}
//             />
//             <h3
//               className="col-5 w-4 fw-bold"
//               style={{
//                 position: "absolute",
//                 top: "49%",
//                 left: "53%",
//                 transform: "translate(-50%, -50%)",
//                 fontWeight: "bold",
//                 color: "#fff",
//                 textAlign: "left",
//                 lineHeight: "1.5",
//                 fontSize:"32px",
//               }}
//             >
//               Very good works are waiting for you. Login Now!!!
//             </h3>
//           </div>
//           <img
//             src={flash}
//             alt="Flash"
//             className="position-absolute p-5 flash"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;
