import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer web development, SEO, graphic design, content writing, and social media management services."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact support via phone, email, or live chat. Our support team is available 24/7."
  },
  {
    question: "What is your refund policy?",
    answer: "We do not offer refunds. In case of payment issues, we may temporarily or permanently block the website."
  },
  {
    question: "How do you handle late payments?",
    answer: "Late payments may incur extra charges. If payment is not settled within 15 days of project completion, we may block the client's website."
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Yes, we offer custom pricing for services like graphic design, content writing, and social media management."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The project completion time varies depending on the complexity and requirements. Typically, a standard project takes 4-6 weeks."
  },
  {
    question: "Can I make changes to my project after it's completed?",
    answer: "Yes, but additional charges may apply depending on the scope and nature of the changes."
  },
  {
    question: "Do you provide ongoing maintenance services?",
    answer: "Yes, we offer ongoing maintenance and support services to ensure your website and other digital assets remain up-to-date and secure."
  },
  {
    question: "What platforms do you develop websites on?",
    answer: "We develop websites on various platforms including WordPress, Shopify, Magento, and custom-built solutions."
  },
  {
    question: "How do you ensure the security of my website?",
    answer: "We follow industry best practices and use the latest security measures to protect your website from vulnerabilities and threats."
  },
  {
    question: "Do you offer SEO services for existing websites?",
    answer: "Yes, we offer SEO services for both new and existing websites to help improve their search engine rankings and online visibility."
  },
  {
    question: "Can you help with social media marketing?",
    answer: "Yes, our social media management services include creating and managing social media campaigns to help you reach and engage with your audience."
  },
  {
    question: "What are your payment terms?",
    answer: "We require a 50% deposit upfront, with the remaining balance due upon project completion. Additional terms may apply for larger projects."
  },
  {
    question: "How do you handle confidential information?",
    answer: "We take confidentiality seriously and ensure that all client information is kept secure and private."
  },
  {
    question: "Do you offer training for using the website?",
    answer: "Yes, we provide training sessions to help you and your team learn how to manage and update your website effectively."
  },
  {
    question: "Can you help with email marketing campaigns?",
    answer: "Yes, we offer email marketing services to help you create and manage effective email campaigns."
  },
];

const FAQItem = ({ faq, index, toggleFAQ }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white text-black p-6 rounded-lg shadow-md mb-4"
  >
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-semibold">{faq.question}</h4>
      <button onClick={() => toggleFAQ(index)} className="text-lg">
        {faq.open ? "-" : "+"}
      </button>
    </div>
    {faq.open && <p className="mt-4">{faq.answer}</p>}
  </motion.div>
);

const FAQs = () => {
  const [faqData, setFaqData] = useState(faqs.map(faq => ({ ...faq, open: false })));

  const toggleFAQ = index => {
    setFaqData(faqData.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : faq)));
  };

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
        <h1 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg max-w-md text-center">
          Find answers to common questions about our services and policies.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                {faqData.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} toggleFAQ={toggleFAQ} />
                ))}
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

export default FAQs;
