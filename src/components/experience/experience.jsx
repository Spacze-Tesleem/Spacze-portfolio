import { WORK_EXPERIENCE } from "../../function/data";
import "./experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = () => {
  // ✅ Define separate useRef instances
  const techSliderRef = useRef(null);
  const accountsSliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // ✅ Modify functions to accept ref parameter
  const slideRight = (ref) => {
    if (ref.current) ref.current.slickNext();
  };

  const slideLeft = (ref) => {
    if (ref.current) ref.current.slickPrev();
  };

  return (
    <section className="experience-main overflow-hidden">
      <h5>Work Experience</h5>

      {/* ✅ Tech Experience */}
      <h6>Tech Experience</h6>
      <div className="experience-content">
        <div className="arrow-left" onClick={() => slideLeft(techSliderRef)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <Slider ref={techSliderRef} {...settings}>
          {WORK_EXPERIENCE.tech.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
        <div className="arrow-right" onClick={() => slideRight(techSliderRef)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      {/* ✅ Accounts Experience */}
      <h6>Accounts Experience</h6>
      <div className="experience-content">
        <div
          className="arrow-left"
          onClick={() => slideLeft(accountsSliderRef)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <Slider ref={accountsSliderRef} {...settings}>
          {WORK_EXPERIENCE.accounts.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
        <div
          className="arrow-right"
          onClick={() => slideRight(accountsSliderRef)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
