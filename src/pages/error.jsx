import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const ErrorPage = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Error Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center h-screen text-white text-center py-8 bg-hero-gradient"
      >
        <h1 className="text-6xl font-semibold mb-4">404</h1>
        <p className="text-2xl mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="px-4 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition duration-300">
          Go to Home Page
        </Link>
      </motion.div>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
