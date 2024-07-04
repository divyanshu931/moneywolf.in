import React from 'react';
import { motion } from 'framer-motion';
import { Testimonials, Footer, Navbar } from '../components';
import styles from '../style';
import { phone, bg, website_1 } from '../assets';
import Wave from 'react-wavify';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='bg-dimWhite w-full overflow-hidden'>
      <div className={`${styles.flexCenter} ${styles.navbarHeight}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      <section className={`bg-secondary ${styles.flexCenter} ${styles.paddingY}`}>
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center w-full text-white text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className='lg:w-3/8 mb-6 lg:mb-0 bg-secondary'>
            <h1 className={`${styles.heading2} ss:text-[36px] leading-[42px]`}>
              <span className='text-black'>About MoneyWolf</span>
            </h1>
            <p className="text-black max-w-md mx-auto">
              We are the next generation of solution providers in the industry.
              Let us help you achieve your goals with cutting-edge technology and innovative solutions.
              
            </p>
          </div>
          <motion.img
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            src={phone}
            alt="Tech illustration"
            className="w-3/4 lg:w-1/4 ml-0 lg:ml-8"
          />
          
        </motion.div>
      </section>
      <br/><br/>
      <div className="relative">
        <Wave
          fill="#F7F9F2"
          paused={false}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.25,
            points: 4,
          }}
          className="absolute bottom-0 w-full"
        />
        <Wave
          fill="rgba(77, 134, 156, 0.5)"
          paused={false}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.2,
            points: 6,
          }}
          className="absolute bottom-0 w-full"
          style={{ zIndex: -1 }}
        />
      </div>
      <div className={`bg-dimWhite ${styles.flexCenter} min-h-screen`}>
      <div className={`flex flex-col ${styles.paddingY} ${styles.flexCenter} ${styles.boxWidth} bg-dimWhite text-black`}>

        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col items-center ${styles.section} text-center`}
        >
          <div className="w-full lg:w-1/2 mx-auto">
            <h4 className="text-xl font-semibold mb-4">
              At Moneywolf, we empower your online success with reliability, agility, and results-driven solutions.
              With over 4 years of excellence, 10+ industry verticals, 300+ seasoned professionals, and 7000+ successful projects,
              we manage every stage of a project from conception to completion.
              <br />
              Our expert team is dedicated to ensuring your business thrives in the digital age.
              Partner with us for innovative and customized solutions that drive success.
            </h4>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col lg:flex-row items-center ${styles.sectionReverse} text-center`}
        >
          <img src={bg} alt="Company Team" className="w-full lg:w-1/3 mx-auto mb-4 lg:mb-0" />
          <div className="w-full lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-semibold mb-4">About Moneywolf</h2>
            <p className="max-w-3xl mx-auto">
              Moneywolf, established in 2020, is a leading solution-provider known for superior quality services.
              We've carved out a coveted position in this fiercely competitive sector by providing genuine,
              reasonable services with an unwavering customer-centric approach. Our offerings include web design,
              content creation, software development, and e-marketing.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col lg:flex-row items-center ${styles.section} text-center`}
        >
          <div className="w-full lg:w-1/2 mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Our Journey: From Vision to Reality</h2>
            <p className="max-w-3xl mx-auto">
              The story of Moneywolf began with a compact team of marketing and web development enthusiasts committed
              to optimizing technology to transform businesses in the digital spectrum. Over the years, we have grown
              into a powerful force, serving clients from various industries and helping them thrive in the ever-changing
              digital ecosystem.
            </p>
          </div>
          <img src={website_1} alt="Our Journey" className="w-full lg:w-1/3 mx-auto mt-4 lg:mt-0" />
        </motion.section>

        {/* Add more sections here as needed */}

      </div>
      </div>

      <div className={`bg-dimWhite ${styles.flexCenter} min-h-screen`}>
        <div className={styles.boxWidth}>
          {/* Footer */}
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
