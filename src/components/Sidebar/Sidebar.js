import React from 'react';
import sidebar from "../Sidebar/Sidebar.css"
const Sidebar = () => {
  const steps = [
    'Information Collection Form',
    'Complaint Details',
    'Notice Details',
    'Demolition Details',
    'Court Order Details',
    'Submission Details',
  ];

  return (
    <div
      style={{
        backgroundColor:"#F0F4F8",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        gap: '24px',
        position: 'absolute',
        width: '214px',
        height: '298px',
        left: '63px',
        top: '139px',
        isolation: 'isolate',
      }}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 0,
            gap: '12.88px',
            width: '206px',
            height: '30px',
            isolation: 'isolate',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: 0,
              width: '160px',
              height: '26px',
            }}
          >
            <div
              style={{
                width: '30px',
                height: '12px',
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '10px',
                lineHeight: '12px',
                color: '#263238',
                textAlign:"right", 
                opacity: 0.6,
              }}
            >
              Step {index + 1}
            </div>
            <div
              style={{
                width: '160px',
                height: '14px',
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '12px', textAlign:"right", 
                lineHeight: '14px',
                color: '#1E1E1E',
              }}
            >
              {step}
            </div>
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              width: '30px',
              height: '30px',
              background: index === 0 ? '#5038ED' : '#FFFFFF',
              border: `0.42945px solid ${index === 0 ? '#5038ED' : '#263238'}`,
              borderRadius: '50%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Raleway',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '19px',
                color: index === 0 ? '#FFFFFF' : '#263238',
              }}
            >
              {index + 1}
            </span>
          </div>
        </div>
      ))}
      <div className="frame-24">
      <div className="frame-12">
       
      </div>
      <div className="frame-13">
       
        <span className="next-step">Next Step</span>
        
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
