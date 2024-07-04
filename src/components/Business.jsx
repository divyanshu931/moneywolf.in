import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col sm:flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4 sm:mb-0 sm:mr-4`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col'>
      <h4 className='font-poppins font-semibold text-black text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-black text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={`${layout.section} ${styles.flexCenter} px-4 md:px-0`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-black`}>Moneywolf,<br className='sm:block hidden'/> Convert Your Business Dreams Into Reality </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
          Moneywolf is an IT solutions and consultancy firm that assists visionaries in being industry changemakers and defining business future. We collaborate as one team with our clients with the common goal of achieving amazing achievements, outperforming the competition, and redefining industries. To offer better, faster, and more enduring results, we combine our specialized, integrated knowledge with our services. With over 14 years of experience in various industry verticals, we uncover new sources to add value to your
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} mt-8 sm:mt-0`} style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  );
}

export default Business;
