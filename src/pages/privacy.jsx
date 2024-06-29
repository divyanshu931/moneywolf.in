import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-md text-center">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, protect, and share your personal information.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                {/* Privacy Policy content */}
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">1. Information We Collect</h2>
                <p className="mb-4">
                  We collect personal information such as your name, email address, phone number, and company details when you voluntarily provide it to us or when you use our services. Additionally, we may collect usage data and analytics information to improve our services.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">2. How We Use Your Information</h2>
                <p className="mb-4">
                  Your information is used to communicate with you, provide services, improve our offerings, and ensure legal compliance. We may also use aggregated and anonymized data for statistical analysis and marketing purposes.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">3. Sharing Your Information</h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">4. Data Security</h2>
                <p className="mb-4">
                  We implement security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include regular security audits, encryption of data in transit and at rest, and access controls.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">5. Your Rights</h2>
                <p className="mb-4">
                  You have the right to access, update, or delete your personal information. Contact us to exercise these rights. We will respond to your request within a reasonable timeframe and provide you with information about whether we hold any of your personal information.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">6. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy periodically to reflect changes in legal or regulatory requirements, our privacy practices, or advancements in technology. You will be notified of any material changes to this policy via email or through a prominent notice on our website.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">7. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  Our website uses cookies and similar tracking technologies to enhance your experience, analyze trends, administer the website, track users' movements around the website, and gather demographic information. You can control the use of cookies at the individual browser level.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">8. Children's Privacy</h2>
                <p className="mb-4">
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information promptly.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">9. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions or concerns regarding our Privacy Policy, or if you would like to exercise your rights regarding your personal information, please contact us at [Contact Information].
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">10. Compliance</h2>
                <p>
                  We are committed to complying with applicable privacy laws and regulations. If you believe that we have not adhered to this Privacy Policy, please contact us immediately so that we can address your concerns.
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

export default PrivacyPolicy;
