import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { styles } from "../styles";
import { MemojiCanvas } from "./canvas";

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
        <span style={{color:'red'}}>
          
        </span>

        <div className='ml-[85px]'> 
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-quarterary d-inline'>
              <Typewriter
                options={{
                  pauseFor:'2000',
                  strings: ["Elton "],
                  autoStart: true,
                  loop: true,
                }}/>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 px-4 text-white-100`}>
            I love building satisfying user<br className='sm:block hidden' />
              interfaces and web apps.
          </p>
          <p className="px-4 mt-3 text-gray-400">try dragging me with left and right click --> </p>
          
        </div>
      </div>

      <MemojiCanvas />
                
      <div className='absolute xs:bottom-16 bottom-38 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div 
            
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className='w-[30px] h-[52px] rounded-3xl border-4 border-quarterary flex justify-center items-start p-2'>
              <div className='w-1 h-2 rounded-lg bg-quarterary'/>
            </div>
            {/* arrow */}
            {/* <div className="absolute xs:bottom-[-25px] right-[9.25px] w-3 h-3 border-x-8 border-x-transparent border-b-8 border-b-[#DCD7C9] rotate-180"/> */}
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
