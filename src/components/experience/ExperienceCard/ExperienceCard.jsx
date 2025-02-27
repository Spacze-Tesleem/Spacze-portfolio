import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  if (!details || !details.responsibilities) {
    return <div className="experience-card">No data available</div>;
  }

  return (
    <div className="experience-card">
      <h6>{details.title}</h6>
      <div className="work-timing">{details.date}</div>
      <ul>
        {details.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
