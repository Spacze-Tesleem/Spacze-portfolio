import React from "react";

const ContactInfo = ({ iconUrl, text }) => {
  return (
    <div className="contact-details">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo;
