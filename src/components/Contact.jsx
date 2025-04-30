import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import image from "../assets/final-village.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
      <p className={styles.sectionSubText}>{t("contact.getInTouch")}</p>
      <h3 className={styles.sectionHeadText}>{t("contact.contactTitle")}</h3>
        <div className='mt-8 flex gap-4'>
          <a href="https://www.linkedin.com/in/hbeyza-ozluoglu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white text-3xl hover:text-blue-950 transition duration-300' />
          </a>
          <a href="mailto:beyza.ozluoglu@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className='text-white text-3xl hover:text-yellow-600 transition duration-300' />
          </a>
          <a href="https://github.com/hawacodes" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white text-3xl hover:text-neutral-500 transition duration-300' />
          </a>
        </div>
        <img
          src={image}
          className='mt-12 rounded-lg object-cover'
      />


      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");