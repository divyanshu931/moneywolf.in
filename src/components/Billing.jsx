import React from 'react';
import { bill } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id='product' className={`${layout.section} ${styles.flexCenter} px-4 md:px-0`}>
      <div className={layout.sectionImg}>
        <img
          src={bill}
          alt='billing'
          className='w-full h-full relative z-5'
        />
        <div className='absolute z-3 -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient'/>
        <div className='absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Projects Success Highlighting <br className='sm:block hidden'/> The Efficiency of our Excellence.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Moneywolf has been consistently delivering a multitude of cost-effective, top-tier software solutions since its inception. Furthermore, our expertise and experience goes across diverse industries and domains to support every business possible. Our unwavering commitment to excellence has yielded a rich history of high-quality accomplishments in business software development, e-commerce, retail, manufacturing, real estate, consulting services, and more.
        </p>
      </div>  
    </section>
  );
}

export default Billing;
