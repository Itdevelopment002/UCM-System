import React, { useState } from "react";

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
    <div className="container mt-2">
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="col mb-3">
          <div className="col-md-4">
            <label htmlFor="natureOfConstruction" className="form-label">
              Nature of Construction
            </label>
            <select
              id="natureOfConstruction"
              name="natureOfConstruction"
              className="form-select"
              value={formData.natureOfConstruction}
              onChange={handleChange}
              required
            >
              <option value="">Choose nature of construction</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6 mt-3">
            <label htmlFor="remark" className="form-label">
              Remark
            </label>
            <textarea
              id="remark"
              name="remark"
              className="form-control"
              rows="4"
              placeholder="Write a long text here"
              value={formData.remark}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>

        <div className="row">
          <div className="col-2 mt-3">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Remark;
