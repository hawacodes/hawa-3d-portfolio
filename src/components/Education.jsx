import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import { useTranslation } from "react-i18next";

const EducationCard = ({
  index,
  educationTitle,
  educationName,
  from,
  to,
  image,
  degree,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
  >
    <div className='mt-1'>
    <div className="flex items-center flex-col">
      <img
          src={image}
          className='w-20 h-20 rounded-full object-cover'
      />
      <p className='mt-1 text-secondary text-[12px]'>
            {educationName}
      </p>
    </div>
      <p className='text-white tracking-wider text-[18px]'>{educationTitle}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='mt-1 text-secondary text-[12px]'>
            {from} - {to}
          </p>
        </div>
        <div className='flex-1 flex flex-col'>
          <p className='mt-1 text-secondary text-[12px]'>
           {degree}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const { t } = useTranslation();
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t("education.sectionSubText")}</p>
          <h2 className={styles.sectionHeadText}>{t("education.sectionHeadText")}</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <EducationCard key={educations.educationTitle} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");