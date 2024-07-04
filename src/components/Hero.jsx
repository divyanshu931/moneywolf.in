import React from 'react';
import { motion } from 'framer-motion';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';
import styles, { layout } from '../style';

const Hero = () => {
  const imageVariants = {
    hidden: {
      x: '-100vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  return (
    <section id='home' className={`${layout.section}`} style={{ backgroundColor: '#ADD8E6' }}>
      <div className={`${layout.sectionInfo} ${styles.paddingX} xl:px-0 sm:px-16 px-6`} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          className={`flex flex-row items-center py-[6px] px-4 bg-dimBlue rounded-[10px] mb-2`}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={discount}
            alt='discount'
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2 text-black`}>
            <span className='text-white'>60% more traffic {" "}</span>
            <span className='text-white'>| Upgrade  your website</span>
          </p>
        </motion.div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className={`${styles.heading2} ss:text-[72px] leading-[75px] text-black`} style={{ zIndex: 1 }}>
            The Next <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0' style={{ zIndex: 1 }}>
            <GetStarted/>
          </div>
        </div>
        <h1 className={`${styles.heading2} text-black ss:text-[68px] leading-[75px] w-full`} style={{ zIndex: 1 }}>
          Solution
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`} style={{ zIndex: 1 }}>
          Our team of experts uses a methodology to identify the Website model most likely to fit your needs.
          We examine annual percentage rates, annual turnover.
        </p>
      </div>
      <motion.div
        className={`${layout.sectionImg} md:my-0 my-10 relative`}
        initial='hidden'
        animate='visible'
        variants={imageVariants}
        whileHover={{ scale: 1.1 }}
        style={{ zIndex: 0 }}
      >
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`} style={{ zIndex: 1 }}>
        <GetStarted/>
      </div>
    </section>
  );
}

export default Hero;
