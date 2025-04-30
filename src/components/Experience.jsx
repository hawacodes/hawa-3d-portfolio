import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import yellowpagesLogo from "../assets/company/yellowpages.png";
import toksozLogo from "../assets/company/toksoz.png";
import sansetLogo from "../assets/company/sanset.jpg";
import siemensLogo from "../assets/company/siemens.png";


const ExperienceCard = ({ experienceKey }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const companyLogos = {
    juniorFrontendDeveloper: yellowpagesLogo,
    managementTrainee: toksozLogo,
    softwareSpecialist: sansetLogo,
    frontendDeveloper: siemensLogo,
  };
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={t(`experience.${experienceKey}.date`)}
      iconStyle={{ background: "#383E56" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={companyLogos[experienceKey]}
            alt={t(`experience.${experienceKey}.companyName`)}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div className='cursor-pointer'>
        <h3 className='text-white text-[24px] font-bold'>
          {t(`experience.${experienceKey}.title`)}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {t(`experience.${experienceKey}.companyName`)}
        </p>
        <button
          onClick={toggleVisibility}
          className='mt-2 text-white bg-gradient-to-r from-purple-700 via-blue-500 to-emerald-500 p-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105'
        >
          {isVisible ? t("experience.hideDetails") : t("experience.showDetails")}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, height: isVisible ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {t(`experience.${experienceKey}.points`, { returnObjects: true }).map(
            (point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            )
          )}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experienceKeys = [
    "juniorFrontendDeveloper",
    "managementTrainee",
    "softwareSpecialist",
    "frontendDeveloper",
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t("experience.sectionSubText")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t("experience.sectionHeadText")}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experienceKeys.map((key, index) => (
            <ExperienceCard key={`experience-${index}`} experienceKey={key} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "works");