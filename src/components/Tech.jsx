import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-4 text-center'
          >
            {technology.name}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");