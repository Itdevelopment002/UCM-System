import React from 'react';
import ConstructionDemolishManagementcss from "../LandingPage/ConstructionDemolishManagement.css"; // Assuming the CSS file is named App.css

import logo from "../../images/logo1.png"
const ConstructionDemolishManagement = () => {
    return (
        <div className="main-box">
            <div className="left-div ">
               

            <div className="header-div">
                    <h1>Unauthorized <br /> <span className="highlight">Construction Demolish</span> <br /> Management System</h1>
                </div>
                <hr className="line-blue" />

                <div className="description-div">
                    <p>
                        This platform enables citizens to report unauthorized constructions and facilitates timely action by the relevant authorities. 
                        Follow the steps below to file a complaint and monitor its progress.
                    </p>
                </div>
                <button className="register-button">Register Your Complaint</button>

                

               
            </div>
            <div className="logo-div">
            <img src={logo} alt="Logo" className="logo-img" />

</div>

            <div className='right-div-landing-page'>
            <div className="right-image-div"></div>
            </div>
            
        </div>
    );
};

export default ConstructionDemolishManagement;
