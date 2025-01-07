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
    <div
      className="container mx-auto"
      style={{
        padding: "10px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "13px",
        backgroundColor: "white",
      }}
    >
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="col mb-3">
          <div className="col-md-8 mt-3">
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
          <div className="col-8 mt-3">
            <button
              type="submit"
              className="btn justify-content-center align-items-center "
              style={{
                background: "#5038ED",
                color: "white",
                borderRadius: "28px",
                padding: "10px",
                border: "none",
                height:"35px",
                width:"98px",
                fontSize:"13px"
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
