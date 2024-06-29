import React from 'react';
import { card } from '../assets';
import Button from './Button';
import styles, { layout } from '../style';

const CardDeal = () => {
  return (
    <section className={`${layout.section} px-4 sm:px-10`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better Solution <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Moneywolf builds effective Enterprise portals to ease the life of clients in various businesses. Moneywolf provides full-cycle service and project activities support to its clients.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  );
};

export default CardDeal;
