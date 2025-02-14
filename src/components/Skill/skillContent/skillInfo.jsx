import React from "react";

const SkillInfo = ({ heading, skills }) => {
  return (
    <div className="skillsInfo">
      <h6>{heading}</h6>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
          <div className="skills-detail">
            <p>{item.skill}</p>
            <p className="percentage">{item.Percentage}</p>
          </div>

          <div className="skill-progress-bar">
            <div className="skill-progress" style={{width: item.Percentage}}></div>
          </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillInfo