import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { styles } from "../styles";
import { MemojiCanvas } from "./canvas";
import Message from "./Message"
import { useEffect, useState } from "react";

const Hero = () => {

  const [memojiLoaded, setMemojiLoaded] = useState(false)

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
                  pauseFor:'10000',
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
          { memojiLoaded && <Message />}
        </div>
      </div>

      <MemojiCanvas setMemojiLoaded={setMemojiLoaded} />
  
                
      <div className='absolute xs:bottom-8 bottom-26 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='animate-bounce'>
            <div className='w-[30px] h-[52px] rounded-3xl border-4 border-quarterary flex justify-center items-start p-2'>
              <div className='w-1 h-2 rounded-lg bg-quarterary'/>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
