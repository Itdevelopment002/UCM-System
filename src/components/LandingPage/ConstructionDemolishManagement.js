import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';
import rightImage from "../../images/engineer-belongings1.png";
import logo from "../../images/logo1.png";
import bg from "../../images/signup-bg.jpg";
import './ConstructionDemolishManagement.css';
const ConstructionDemolishManagement = () => {
    return (
        <div className="outer-wrapper-lp"  style={{
                background: `url(${bg}) center center / cover no-repeat`, 
                position: "relative",
              }}>
                    <div className="w-90 w-md-75 shadow-lg rounded overflow-hidden "></div>
            <div className="content-box-lp">
                <div className="responsive-container-lp">
                    {/* Left Content Section */}
                    <div className="content-left-lp">
                        <div className="construction-logo">
                            <img src={logo} alt="Logo" className="construction-logo-img" />
                        </div>
                        <h1 className="header-text-lp">
                            Unauthorized <br />
                            <span className="highlight-landingp-heading">Construction Demolish</span> <br />
                            Management System
                        </h1>
                        <div className="divider-landing-page"></div>
                        <p className="description-lp">
                            This platform enables citizens to report unauthorized constructions and facilitates timely action by the relevant authorities. 
                            Follow the steps below to file a complaint and monitor its progress.
                        </p>
                        <Link to="/register" className="btn-link mt-1">
                            <button className="btn btn-primary landing-button-landing-page mt-4">Register Your Complaint</button>
                        </Link>
                    </div>

                    {/* Right Image Section */}
                    <div className="content-right">
                        <img src={rightImage} alt="Engineer" className="right-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConstructionDemolishManagement;
