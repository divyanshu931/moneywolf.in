import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';
import { webDevImage } from '../assets'; // Replace with actual image imports

const values = [
  {
    title: "Integrity",
    description: "We adhere to the highest standards of ethical conduct in all our business activities.",
    image: webDevImage,
  },
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies to deliver innovative solutions to our clients.",
    image: webDevImage,
  },
  {
    title: "Customer Focus",
    description: "Our clients are at the heart of everything we do. We strive to exceed their expectations.",
    image: webDevImage,
  },
  {
    title: "Teamwork",
    description: "We believe in the power of collaboration and working together to achieve common goals.",
    image: webDevImage,
  },
];

const ValueCard = ({ title, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black p-6 rounded-lg shadow-md m-4 max-w-sm"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="mb-4">{description}</p>
  </motion.div>
);

const OurValues = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-1/4 text-white text-center py-8 bg-hero-gradient"
      >
        <h1 className="text-4xl font-semibold mb-4">Our Values</h1>
        <p className="text-lg max-w-md text-center">
          Discover the core values that guide our work and define our company culture.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className="flex flex-wrap justify-center">
              {values.map((value, index) => (
                <ValueCard key={index} title={value.title} description={value.description} image={value.image} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurValues;
