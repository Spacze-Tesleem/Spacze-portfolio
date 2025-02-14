// import { Experience } from "../../function/data";
import slider from "react-slick/lib/slider";
import { JOB_EXPERIENCE } from "../../function/data";
import "./experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = () => {
  const sliderRef = useRef();
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

  const slideRight = () => {
    sliderRef.current.slickNext();
  }
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  }
  return (
    <section className="experience-main">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <Slider ref={sliderRef} {...settings}>
          {JOB_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
