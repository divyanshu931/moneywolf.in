import React from 'react';
import { feedback } from '../constants'; // Assuming feedback is correctly imported
import styles from '../style'; // Assuming styles are correctly imported
import Feedback from './Feedback'; // Assuming Feedback component is correctly imported

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-4 sm:px-10`} style={{ overflow: 'hidden' }}>
      {/* Gradient circle */}
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' style={{ zIndex: -1 }} />
      
      {/* Testimonials header and description */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Over the years, Moneywolf has served these clients building the prominence of its services and trust.
          </p>  
        </div>
      </div>
      
      {/* Feedback cards */}
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />        
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
