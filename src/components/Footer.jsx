import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col px-4 sm:px-10`}>
      {/* Separator Line */}
      <div className='w-full border-t-[1px] border-t-[#3F3E45] mb-8'></div>
      
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <a href="/">
            <img
              src={logo}
              alt='logo'
              className='w-[266px] h-[172px] object-contain'
            />
          </a>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Moneywolf Services Are Geared To Deliver
            Results That You Expect From Consulting Partner.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-black'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <a
                    href={item.link}
                    key={item.name}
                  >
                    <li
                      key={item.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimblue hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                    >
                      {item.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-black'>
          2024 Moneywolf All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              key={social.id}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
