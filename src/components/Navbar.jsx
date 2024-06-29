import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full max-w-[1200px] mx-auto py-6 px-4 sm:px-10 flex justify-between items-center navbar fixed top-0 left-1/2 transform -translate-x-1/2 z-10 bg-transparent">
      <img src={logo} alt="Moneywolf" className="w-[124px] h-[32px] sm:mr-16" />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center relative z-20">
        <motion.img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Top Navigation for Mobile */}
      <motion.div
        className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-4 left-4 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, i) => (
            <motion.li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                i === navLinks.length - 1 ? 'mb-0' : 'mb-4'
              } text-white`}
              whileHover={{ scale: 1.1 }}
            >
              <Link to={nav.id} onClick={() => setToggle(false)}>
                {nav.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
