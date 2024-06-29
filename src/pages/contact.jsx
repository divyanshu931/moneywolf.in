import React, { useState } from 'react';
import { Footer, Navbar } from '../components'; // Adjust the relative path to the components folder
import styles from '../style.js';
import { logo } from '../assets/index.js';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add further logic for form submission, e.g., sending data to backend
  };

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        
      
      <div className="flex flex-col items-center justify-center h-1/4 text-white py-8"><br/>
        <img src={logo} alt="Company Logo" className="w-32 h-32 mb-4 animate-bounce" />
        <h1 className="text-4xl font-semibold mb-4 animate-fade-in-up">Contact Us</h1>
        <p className="text-lg max-w-md text-center animate-fade-in-up">
          We'd love to hear from you! Please fill out the form below or give us a call.
        </p>
      </div>
      <section className="bg-primary-100 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0 md:w-1/2 animate-fade-in-left">
              <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4 text-white">Phone: +1 (123) 456-7890</p>
              <p className="mb-4 text-white">Email: contact@moneywolf.in</p>
              <p className="mb-4">Address: 123 Moneywolf, Suite 100, UP, India</p>
            </div>
            <div className="md:w-1/2 animate-fade-in-right">
              <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="animate-fade-in">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      {/* Footer */}
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
