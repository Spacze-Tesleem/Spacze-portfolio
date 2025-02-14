import ContactInfo from "./components/contactInfo";
import "./contact.css"
import Svg from "./components/icon";

const Contact = () => {
  return (
    <div className="contact-main">
      <h5>Contact</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
            <ContactInfo iconUrl="../../assets/address.png" text="Seidutesleem72@gmail.com" />
            <ContactInfo iconUrl={Svg} text="https://github.com/icefrosh" />
        </div>
        <div style={{ flex: 1 }}>
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
