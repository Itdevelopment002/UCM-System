import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConstructionDemolishManagement.css';
import logo from "../../images/logo1.png";
import rightImage from "../../images/engineer-belongings1.png"; // Import right image

const ConstructionDemolishManagement = () => {
    return (
        <div className="outer-wrapper">
            <div className="content-box">
           

                <div className="row  " style={{display:"flex", justifyContent:"space-between"}}>
                    {/* Left Content Section */}
                    <div className="col-md-6 content-left">
                                        
            <div className="construction-logo">
  <img src={logo} alt="Logo" className="construction-logo-img" />
</div>
         
                        <h1 className="header-text">
                            Unauthorized <br />
                            <span className="highlight">Construction Demolish</span> <br />
                            Management System
                        </h1>
                        <div className="divider"></div>
                        <p className="description">
                            This platform enables citizens to report unauthorized constructions and facilitates timely action by the relevant authorities. 
                            Follow the steps below to file a complaint and monitor its progress.
                        </p>
                        <Link to="/register" className="btn-link mt-5">
                            <button className="btn btn-primary register-button mt-4">Register Your Complaint</button>
                        </Link>
                    </div>



                    {/* Right Image Section */}
                    <div className="col-md-5 content-right">
                        <img src={rightImage} alt="Engineer" className="right-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionDemolishManagement;
