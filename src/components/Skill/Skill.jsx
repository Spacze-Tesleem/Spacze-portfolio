import "./skill.css";
import { Skills } from "../../function/data";
import SkillData from "./skillContent/skillData";
import SkillInfo from "./skillContent/skillInfo";
import { useState } from "react";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(Skills[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <section className="skills-main">
      <h5>Technical Proficiency</h5>

      <div className="skills-content flex">
        <div className="skills ">
          {Skills.map((item) => (
            <SkillData
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectedSkill(item)
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillInfo
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
