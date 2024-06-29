import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your suggestion!');
    setFormData({
      name: '',
      email: '',
      suggestion: ''
    });
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
        <h1 className="text-4xl font-semibold mb-4">Suggestions</h1>
        <p className="text-lg max-w-md text-center">
          We value your feedback and suggestions to improve our services. Please share your thoughts with us.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white bg-discount-gradient`}>
            <div className={`flex ${styles.section}`}>
              <div className="w-full">
                <h2 className="text-3xl font-semibold mb-4 text-center text-gradient">Submit Your Suggestions</h2>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-black rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-black rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="suggestion" className="block text-sm font-medium mb-2">Suggestion</label>
                    <textarea
                      id="suggestion"
                      name="suggestion"
                      value={formData.suggestion}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-black rounded-md"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </form>
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

export default Suggestions;
