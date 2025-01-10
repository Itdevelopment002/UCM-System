import React, { useState } from "react";
import './FunctionalRequiremnt.css';
const Remark = () => {
  const [formData, setFormData] = useState({
    natureOfConstruction: "",
    remark: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="remark-form">
        <div className="col mb-3">
          <div className="col-md-8 mt-3">
            <label htmlFor="remark" className="form-label label-small">
              Remark
            </label>
            <textarea
              id="remark"
              name="remark"
              className="form-control input-small  text-box-height "
              rows="4"
              placeholder="Write a long text here"
              value={formData.remark}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-8 mt-3">
          <button
              type="submit"
              className="btn submit-btn"
              style={{
                background: 'linear-gradient(99.78deg, #9181F4 -5.85%, #5038ED 109.55%)',
                color: "white",
                fontWeight:"bold",
                borderRadius: "28px",
                padding: "10px",
                border: "none",
                height: "35px",
                width: "98px",
                fontSize: "13px"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Remark;
