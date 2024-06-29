import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const SupportPage = () => {
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
        <h1 className="text-4xl font-semibold mb-4">24/7 Support</h1>
        <p className="text-lg max-w-md text-center">
          Our support team is available around the clock to assist you with any inquiries or issues you may have.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                {/* Support content */}
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">1. Contact Methods</h2>
                <p className="mb-4">
                  You can reach our support team through various channels:
                  <ul className="list-disc pl-8">
                    <li>Phone: [Phone Number]</li>
                    <li>Email: [Email Address]</li>
                    <li>Live Chat: Available on our website</li>
                  </ul>
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">2. Instant Response</h2>
                <p className="mb-4">
                  We prioritize quick responses to ensure your issues are addressed promptly, day or night.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">3. Dedicated Support Team</h2>
                <p className="mb-4">
                  Our dedicated team of support professionals is trained to handle technical, billing, and general inquiries efficiently.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">4. Service Level Agreements</h2>
                <p className="mb-4">
                  We adhere to Service Level Agreements (SLAs) to guarantee a high standard of support and response times.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">5. Feedback and Improvements</h2>
                <p>
                  Your feedback is crucial to us. We continuously strive to improve our support services based on your suggestions and experiences.
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

export default SupportPage;
