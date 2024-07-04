import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const TermsAndConditions = () => {
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
        <h1 className="text-4xl font-semibold mb-4">,Terms and Conditions</h1>
        <p className="text-lg max-w-md text-center">
          Please read these terms and conditions carefully before using our services.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-black-gradient-2`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                {/* Terms and Conditions content */}
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">1. Payment Terms</h2>
                <p className="mb-4">
                  After completion of the project, payment must be settled within 15 days. Failure to settle the payment may result in temporary or permanent blocking of the client's website. Additional charges may apply for late payments after 1 week.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">2. Delivery and Acceptance</h2>
                <p className="mb-4">
                  Products or services will be delivered within the agreed timeframe. Clients must review and accept delivered products within 7 days. Failure to accept within this period may be considered acceptance.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">3. Intellectual Property</h2>
                <p className="mb-4">
                  All intellectual property rights related to the delivered products remain with our company until full payment is received. Clients are granted a license for use upon full settlement of invoices.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">4. Liability</h2>
                <p className="mb-4">
                  We are not liable for any damages or losses incurred due to changes made by the client or third parties after delivery of the product.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">5. Termination of Services</h2>
                <p className="mb-4">
                  We reserve the right to terminate services if clients violate these terms and conditions. Termination may result in the suspension or termination of access to services without refund.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">6. Payment Methods</h2>
                <p className="mb-4">
                  We accept payment via bank transfer, credit card, or PayPal. Please ensure payments are made using valid and authorized methods to avoid delays.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">7. Currency</h2>
                <p className="mb-4">
                  All payments must be made in US Dollars (USD) unless otherwise agreed upon in writing between the client and our company.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">8. Late Payment Charges</h2>
                <p className="mb-4">
                  Late payments may be subject to a penalty fee of 2% per month on the outstanding balance, compounded monthly, or the maximum rate allowed by law, whichever is lower.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">9. Refunds</h2>
                <p className="mb-4">
                  Refunds are not provided for completed projects. In exceptional cases, refunds may be considered at our discretion if services are not delivered as agreed upon.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">10. Confidentiality</h2>
                <p className="mb-4">
                  Both parties agree to maintain confidentiality regarding any proprietary or confidential information shared during the course of the project.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">11. Indemnification</h2>
                <p className="mb-4">
                  Clients agree to indemnify and hold harmless our company from any claims, damages, losses, or liabilities arising from their use of our services or violation of these terms and conditions.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">12. Dispute Resolution</h2>
                <p className="mb-4">
                  Any disputes arising from these terms and conditions shall be resolved through mediation or arbitration in accordance with the laws of [Your Jurisdiction].
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">13. Amendments</h2>
                <p className="mb-4">
                  We reserve the right to update or modify these terms and conditions at any time. Clients will be notified of changes, and continued use of our services constitutes acceptance of the revised terms.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">14. Governing Law</h2>
                <p className="mb-4">
                  These terms and conditions are governed by the laws of [Your Jurisdiction], without regard to its conflict of law principles.
                </p>

                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">15. Entire Agreement</h2>
                <p>
                  These terms and conditions constitute the entire agreement between the client and our company, superseding any prior agreements or understandings, written or oral.
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

export default TermsAndConditions;
