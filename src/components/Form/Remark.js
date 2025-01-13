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
          <div className="col-md-4 mt-3">
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

        <button type="submit" className="btn submit-btn-form">
  Submit Form
</button>
      </form>
    </div>
  );
};

export default Remark;
