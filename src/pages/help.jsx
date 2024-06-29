import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const HelpCenter = () => {
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
        <h1 className="text-4xl font-semibold mb-4">Help Center</h1>
        <p className="text-lg max-w-md text-center">
          Welcome to our Help Center. Here you'll find resources and answers to commonly asked questions.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-black-gradient-2`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                {/* Help Center content */}
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">1. Getting Started</h2>
                <p className="mb-4">
                  Whether you're new to our services or looking for setup instructions, this section provides guides and tutorials to get you started quickly.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">2. Account Management</h2>
                <p className="mb-4">
                  Manage your account settings, billing information, and preferences. Learn how to update your profile or change your password securely.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">3. Troubleshooting</h2>
                <p className="mb-4">
                  Encountering issues? Check out troubleshooting tips and solutions to common problems. Our support team is also available to assist you.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">4. Contact Support</h2>
                <p className="mb-4">
                  Need further assistance? Contact our support team directly through our contact form or email. We're here to help resolve any issues promptly.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">5. FAQs</h2>
                <p className="mb-4">
                  Browse through frequently asked questions to find quick answers to common inquiries about our services, policies, and more.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">6. Community Forums</h2>
                <p className="mb-4">
                  Join discussions, share insights, and connect with other users in our community forums. Exchange tips, ask questions, and learn from each other.
                </p>

                {/* Add more sections as needed */}
              </div>
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

export default HelpCenter;
