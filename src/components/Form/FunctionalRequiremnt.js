import React from 'react';
import FunctionalRequiremnt1 from "../Form/FunctionalRequiremnt.css"
const FunctionalRequiremnt = () => {
<<<<<<< Updated upstream
=======
 
  const [formValues, setFormValues] = useState({
    wardGroup: "",
    contactNumber: "",
    pincode: "",
    ucNo: "",
    ownerName: "",
    detailedAddress: "",
    datePicker: "",
    camp: "",
    constructionType: {
      residential: false,
      commercial: false,
    },
  });

  const [selectedOption, setSelectedOption] = useState("Select Occupation Type");
  const [selecteddOption, setSelecteddOption] = useState("Choose nature of construction");
  const [isOpenOccupation, setIsOpenOccupation] = useState(false);
  const [isOpenConstruction, setIsOpenConstruction] = useState(false);

  const occupationOptions = [
    "Owner",
    "Rented",
    "Shop",
    "Company",
    "ATM",
    "Hospital",
    "Rank",
  ];

  const constructionOptions = [
    "Residential",
    "Commercial",
    "Industrial",
    "Mixed-Use",
    "Public",
    "Institutional",
    "Recreational",
    "Agricultural",
    "Retail",
    "Hospitality",
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  

  const handleCheckboxToggle = (e) => {
    const { id, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      constructionType: {
        ...prev.constructionType,
        [id]: checked,
      },
    }));
  };

  const toggleOccupationDropdown = () => {
    setIsOpenOccupation(!isOpenOccupation);
  };

  const toggleConstructionDropdown = () => {
    setIsOpenConstruction(!isOpenConstruction);
  };

  const handleSelect = (option, type) => {
    if (type === "occupation") {
      setSelectedOption(option);
    } else {
      setSelecteddOption(option);
    }
    setIsOpenOccupation(false);
    setIsOpenConstruction(false);
  };


  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};
    if (!formValues.contactNumber || formValues.contactNumber.length !== 10) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number.";
    }
    if (!formValues.pincode || formValues.pincode.length !== 6) {
      newErrors.pincode = "Please enter a valid 6-digit pincode.";
    }
    if (!formValues.wardGroup) {
      newErrors.wardGroup = "Ward Office Name is required.";
    }
    if (!formValues.ownerName) {
      newErrors.ownerName = "UC Owner Name is required.";
    }
    return newErrors;
  };

 const handleSubmit = (e) => {
     e.preventDefault();
 
     if (validateForm()) {
       console.log("Form Data Submitted:", formValues);
       toast.success("Form submitted successfully!"); // Success toast
       // Add your form submission logic here
     } else {
       toast.error("Please fill in all required fields."); // Error toast
     }
   };

>>>>>>> Stashed changes
  return (
    <div style={{ padding: '10px' , fontFamily:"poppins", fontWeight:"600", fontSize:"13px",backgroundColor:"white" }}>
      <form>
        <div className="row">
          {/* First Column */}
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="wardGroup" className="form-label ">Ward Group</label>
              <input
                type="text"
                className="form-control"
                id="wardGroup"
                placeholder="Enter ward group"
                style={{ height: '40px' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ucNo" className="form-label">Unauthorized Construction Number (UC No.)</label>
              <input
                type="text"
                className="form-control"
                id="ucNo"
                placeholder="Enter UC No."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ownerName" className="form-label">Owner Name</label>
              <input
                type="text"
                className="form-control"
                id="ownerName"
                placeholder="Enter owner name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-8 ">
            <h2 style={{fontSize:"16px"}}>Address Details</h2>
            <div style={{height:"2px", width:"auto" , background:"#5038ED"}}>

            </div>
            <div className="mb-3 mt-2">
              <label htmlFor="detailedAddress" className="form-label">Detailed Address</label>
              <textarea
                className="form-control"
                id="detailedAddress"
                placeholder="Write a long text here"
                rows="2"

              />
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="pincode" className="form-label">Pincode</label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  placeholder="Enter pincode"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="wardOffice" className="form-label">Ward Office</label>
                <input
                  type="text"
                  className="form-control"
                  id="wardOffice"
                  placeholder="Enter ward office"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="camp" className="form-label">Camp</label>
                <input
                  type="text"
                  className="form-control"
                  id="camp"
                  placeholder="Enter camp"
                />
              </div>
            </div>
            <h2 style={{fontSize:"16px"}}>Construction Details</h2>
            <div style={{height:"2px", width:"auto" , background:"#5038ED"}}>

            </div>
            <div className="row mb-3 mt-2">
                
              {/* Type */}
              <div className="col-md-2">
                <h6>Type</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="residential"
                  />
                  <label className="form-check-label" htmlFor="residential" style={{fontSize:"12px", fontWeight:"300px"}}>
                    Residential
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="commercial"
                  />
                  <label className="form-check-label" htmlFor="commercial" style={{fontSize:"12px", fontWeight:"100px"}}>
                    Commercial
                  </label>
                </div>
              </div>

              {/* Occupation Type */}
              <div className="col-md-6" style={{paddingLeft:"40px"}}>
  <h6>Occupation Type</h6>
  <select className="form-select" name="occupationType" id="occupationType">
    <option value="" disabled selected style={{fontSize:"9px"}}>
      Select Occupation Type
    </option>
    <option value="owner">Owner</option>
    <option value="rented">Rented</option>
    <option value="shop">Shop</option>
  </select>
</div>



              {/* Date */}
              <div className="col-md-4">
                <h6>Created Date</h6>
                <input
                  type="date"
                  className="form-control"
                  id="datePicker"
                />
              </div>
            </div>
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default FunctionalRequiremnt;
