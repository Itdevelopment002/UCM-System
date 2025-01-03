import React from 'react';

const Form = () => {
  return (<></>
    // <div
    //   className="p-4 shadow-sm"
    //   style={{ width: '966px', backgroundColor: 'white', position: 'absolute', top: '112px', left: '352px' }}
    // >
    //   <h3>Functional Requirements</h3>
    //   <form>
    //      <div style={{
    //   display: 'flex',
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   padding: '0px',
    //   width: '966px',
    //   height: '42px',
    //   borderBottom: '0.42945px solid rgba(38, 50, 56, 0.1)',
    // }}>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '221px',
    //     height: '45px',
    //     background: '#5038ED',
    //     borderBottom: '0.42945px solid #FFFFFF',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '186px',
    //       height: '16px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       color: '#FFFFFF',
    //     }}>
    //       Information Collection Form
    //     </div>
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '147px',
    //     height: '42px',
    //     opacity: '0.8',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '135px',
    //       height: '8px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       textAlign: 'center',
    //       color: '#263238',
    //     }}>
    //       Complaint Details
    //     </div>
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '124px',
    //     height: '42px',
    //     opacity: '0.8',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '105px',
    //       height: '8px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       textAlign: 'center',
    //       color: '#263238',
    //     }}>
    //       Notice Details
    //     </div>
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '148px',
    //     height: '42px',
    //     opacity: '0.8',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '136px',
    //       height: '8px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       textAlign: 'center',
    //       color: '#263238',
    //     }}>
    //       Demolition Details
    //     </div>
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '164px',
    //     height: '42px',
    //     opacity: '0.8',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '140px',
    //       height: '8px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       textAlign: 'center',
    //       color: '#263238',
    //     }}>
    //       Court Order Details
    //     </div>
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     padding: '4.2945px 6.44176px',
    //     gap: '4.29px',
    //     width: '153px',
    //     height: '42px',
    //     opacity: '0.8',
    //     borderRadius: '4.2945px 4.2945px 0px 0px',
    //   }}>
    //     <div style={{
    //       width: '134px',
    //       height: '8px',
    //       fontFamily: 'Raleway',
    //       fontStyle: 'normal',
    //       fontWeight: '600',
    //       fontSize: '14px',
    //       lineHeight: '16px',
    //       textAlign: 'center',
    //       color: '#263238',
    //     }}>
    //       Submission Details
    //     </div>
    //   </div>
    // </div>
    //     <div className="mb-3">
    //       <label htmlFor="wardGroup" className="form-label">Ward Group</label>
    //       <input type="text" className="form-control" id="wardGroup" placeholder="Enter ward group" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="ucNo" className="form-label">Unauthorized Construction Number (UC No.)</label>
    //       <input type="text" className="form-control" id="ucNo" placeholder="Enter UC No." />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="ownerName" className="form-label">Owner Name</label>
    //       <input type="text" className="form-control" id="ownerName" placeholder="Enter owner name" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="contactNumber" className="form-label">Contact Number</label>
    //       <input type="text" className="form-control" id="contactNumber" placeholder="Enter contact number" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="address" className="form-label">Detailed Address</label>
    //       <input type="text" className="form-control" id="address" placeholder="Write a long text here" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="pincode" className="form-label">Pincode</label>
    //       <input type="text" className="form-control" id="pincode" placeholder="Enter pincode" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="wardOffice" className="form-label">Ward Office</label>
    //       <input type="text" className="form-control" id="wardOffice" placeholder="Enter ward office" />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="camp" className="form-label">Camp</label>
    //       <input type="text" className="form-control" id="camp" placeholder="Enter camp" />
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Construction Type</label>
    //       <div>
    //         <input type="radio" id="residential" name="type" value="Residential" />
    //         <label htmlFor="residential" className="ms-2 me-4">Residential</label>
    //         <input type="radio" id="commercial" name="type" value="Commercial" />
    //         <label htmlFor="commercial" className="ms-2">Commercial</label>
    //       </div>
    //     </div>
    //     <div className="mb-3">
    //       <label className="form-label">Occupation Type</label>
    //       <select className="form-select">
    //         <option>Select the occupation type</option>
    //         <option>Residential</option>
    //         <option>Commercial</option>
    //       </select>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="createdDate" className="form-label">Created Date</label>
    //       <input type="date" className="form-control" id="createdDate" />
    //     </div>
    //     <button type="submit" className="btn btn-primary">Submit</button>
    //   </form>
    // </div>
  );
};

export default Form;
