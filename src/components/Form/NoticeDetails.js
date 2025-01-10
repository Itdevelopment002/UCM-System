import React ,{useState} from "react";
import "./FunctionalRequiremnt.css";


const NoticeDetails = () => {
  const [formattedDate, setFormattedDate] = useState('');

  const handleDateChange = (e) => {
    const dateValue = e.target.value; // Native format (yyyy-mm-dd)
    const [year, month, day] = dateValue.split('-');
    if (year && month && day) {
      setFormattedDate(`${day}/${month}/${year.slice(-2)}`); // Convert to dd/mm/yy
    }
  };
  return (
    <div className="form-container">
      <form>
        <div className="row d-flex align-items-center">
          {/* First Column */}
          <div className="col-md-6 d-flex ">
            <div className="mb-3 col-md-3">
              <label htmlFor="occupationType" className="form-label label-small">Generated Notices</label>
              <select className="form-select select-style" name="occupationType" id="occupationType"  placeholder="Select the notice">
                <option value="" disabled selected>
                Select the notice
                </option>
                <option value="owner">Owner</option>
                <option value="rented">Rented</option>
                <option value="shop">Shop</option>
              </select>
            </div>
            <div className="mb-3 cl-md-3 ms-3">
      <label htmlFor="datePicker" className="form-label label-small">Date</label>
      <input
        type="date"
        className="form-control input-small input-box-size"
        id="datePicker"
        onChange={handleDateChange}
      />
      {formattedDate && (
        <div className="mt-2">
          <small>Selected Date: {formattedDate}</small>
        </div>
      )}
    </div>
          </div>

          {/* Second Column */}
          
        </div>
      </form>
    </div>
  );
};

export default NoticeDetails;
