import React from 'react';
import ConstructionDemolishManagementcss from "../LandingPage/ConstructionDemolishManagement.css"; // Assuming the CSS file is named App.css


const ConstructionDemolishManagement = () => {
    return (
        <div className="main-box">
            <div className="left-div ">
               

            <div className="header-div">
                    <h1>Unauthorized <br /> <span className="highlight">Construction Demolish</span> <br /> Management System</h1>
                </div>

                <div className="description-div">
                    <p>
                        This platform enables citizens to report unauthorized constructions and facilitates timely action by the relevant authorities. 
                        Follow the steps below to file a complaint and monitor its progress.
                    </p>
                </div>
                <button className="register-button">Register Your Complaint</button>

                

               
            </div>
            <div> <div className="logo-div"></div></div>
            <div className='right-div-landing-page'>
            <div className="right-image-div"></div>
            </div>
            
        </div>
    );
};

export default ConstructionDemolishManagement;
