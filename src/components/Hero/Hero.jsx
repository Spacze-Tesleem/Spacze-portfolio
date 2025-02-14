import React from "react";
import reactIcon from "../../assets/react-svgrepo-com.svg";
import Spacze from "../../assets/spacze.jpg";
import Html from "../../assets/html-5-svgrepo-com.svg";
import Css from "../../assets/css-3-svgrepo-com.svg";
import Js from "../../assets/js-svgrepo-com.svg";
import Bootstrap from "../../assets/bootstrap-fill-svgrepo-com.svg";
import Tailwind from "../../assets/tailwind-svgrepo-com.svg";
import "./Hero.css"

const Hero = () => {
  const techIcon = [
    {img: Html},
    {img: Css},
    {img: Js},
    {img: Bootstrap},
    {img: Tailwind}
  ]
  return (
    <div className="hero-main flex item-center">
      <div className="hero-content">
        <h2>Building The Tech Spacze Experience That Inspire</h2>
        <p>
          Front-end developer with a background in accounting, skilled in HTML,
          CSS, JavaScript, ReactJS, and financial tools. Experienced in building
          responsive web solutions and handling financial reporting,
          reconciliation, and analysis. Eager to contribute to teams by
          delivering great user experiences and ensuring financial accuracy.
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="techIcon">
            <img src={reactIcon} alt="" width={80} />
          </div>
          <img src={Spacze} className="spacze" alt="" />
        </div>

        <div>
          {techIcon.map((svg, index) => (
            <div className="techIcon" key={index}>
              <img src={svg.img} width={80} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
