import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-custom-line"
      contentStyle={{
        background: "#4f575e",
        color: "#fff",
        boxShadow: "0px 3px 1px rgba(221, 221, 221, 1), 0 10px 15px rgba(204, 204, 204, 1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631", display: "none" }}
      date={experience.date}
      iconClassName="vertical-timeline-element-icon"
      iconStyle={{ background: experience.iconBg, }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[90%] h-[90%] object-contain -z-5 rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-tertiary font-bold px-1'
          style={{ margin: 0, fontSize:'20px',fontWeight:'bold'}}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-3 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({innerRef}) => {
  return (
    <>
      <motion.div variants={textVariant()} ref={innerRef}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
        lineColor="#DCD7C9"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
