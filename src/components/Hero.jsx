import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[210px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-quarterary' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div> */}

        <div className='ml-[85px]'> 
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-quarterary'>Elton</span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 px-4 text-white-100`}>
            I love building satisfying user<br className='sm:block hidden' />
              interfaces and web apps.
          </p>
          <p className="px-4 mt-3 text-gray-400">try dragging me with left and right click --> </p>
          
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-quarterary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-quarterary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
