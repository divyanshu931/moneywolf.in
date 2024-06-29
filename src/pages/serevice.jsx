import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';
import { webDevImage, seoImage, otherServicesImage } from '../assets'; // Replace with actual image imports
import Wave from 'react-wavify'
const webDevelopmentPlans = [
  { id: 1, name: "Basic Web Development", description: "A basic plan for small businesses.", price: "$500" },
  { id: 2, name: "Standard Web Development", description: "A standard plan with additional features.", price: "$1000" },
  { id: 3, name: "Premium Web Development", description: "A premium plan for large businesses.", price: "$2000" },
  { id: 4, name: "Enterprise Web Development", description: "An enterprise plan with full custom solutions.", price: "$5000" },
];

const seoPlans = [
  { id: 1, name: "Basic SEO", description: "Basic SEO plan for small websites.", price: "$300" },
  { id: 2, name: "Standard SEO", description: "Standard SEO plan with advanced features.", price: "$600" },
  { id: 3, name: "Premium SEO", description: "Premium SEO plan for large websites.", price: "$1200" },
];

const otherServices = [
  { id: 1, name: "Graphic Design", description: "High-quality graphic design services.", price: "Custom Pricing" },
  { id: 2, name: "Content Writing", description: "Professional content writing services.", price: "Custom Pricing" },
  { id: 3, name: "Social Media Management", description: "Comprehensive social media management.", price: "Custom Pricing" },
];


const ServiceCard = ({ name, description, price }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black p-6 rounded-lg shadow-md m-4 max-w-sm w-full h-64 flex flex-col justify-between"
  >
    <div>
      <h4 className="text-xl font-semibold mb-2">{name}</h4>
      <p className="mb-4">{description}</p>
    </div>
    <p className="text-lg font-bold">{price}</p>
  </motion.div>
);


const Service = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} `}>
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
        <h1 className="text-4xl font-semibold mb-4"><br/><br/>Our Services</h1>
        <p className="text-lg max-w-md text-center">
          Providing a wide range of services to meet your needs.
        </p>
      </motion.div>
      <Wave
    fill="#4D869C"
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height: 20,
      amplitude: 20,
      speed: 0.15,
      points: 8,
    }}
  />  
      {/* Main Content */}
      <div className={` bg-black-gradient ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <div className={`flex flex-col ${styles.paddingY} text-white bg-black-gradient`}>
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${styles.section} bg-black-gradient`}
        >
          <div className="w-full lg:w-1/2}">
            <h2 className="text-3xl font-semibold mb-4 text-center ">Web Development Plans</h2>
            <p className="text-center max-w-3xl mb-8">
              Our web development plans are designed to cater to businesses of all sizes. Whether you're a small business looking for a basic website or a large corporation in need of an enterprise-level solution, we have the perfect plan for you. Our team of experienced developers is dedicated to delivering high-quality websites that are both functional and visually appealing.
            </p>
            <div className="flex flex-wrap justify-center">
              {webDevelopmentPlans.map((plan) => (
                <ServiceCard key={plan.id} name={plan.name} description={plan.description} price={plan.price} />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={webDevImage}
            alt="Web Development"
            className="w-full lg:w-1/2 ml-0 lg:ml-8"
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${styles.sectionReverse} bg-black-gradient`}
        >
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={seoImage}
            alt="SEO Services"
            className="w-full lg:w-1/2 mr-0 lg:mr-8"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-center">SEO Plans</h2>
            <p className="text-center max-w-3xl mb-8">
              Our SEO plans are tailored to help your website rank higher in search engine results, driving more traffic and increasing your online visibility. From basic SEO strategies for small websites to comprehensive plans for large enterprises, our experts use the latest techniques to ensure your site performs at its best.
            </p>
            <div className="flex flex-wrap justify-center">
              {seoPlans.map((plan) => (
                <ServiceCard key={plan.id} name={plan.name} description={plan.description} price={plan.price} />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${styles.section} bg-black-gradient`}
        >
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-center">Other Services</h2>
            <p className="text-center max-w-3xl mb-8">
              In addition to web development and SEO, we offer a variety of other services to help your business succeed online. Our graphic design team can create stunning visuals, our content writers can produce engaging content, and our social media managers can handle all aspects of your social media presence.
            </p>
            <div className="flex flex-wrap justify-center">
              {otherServices.map((service) => (
                <ServiceCard key={service.id} name={service.name} description={service.description} price={service.price} />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={otherServicesImage}
            alt="Other Services"
            className="w-full lg:w-1/2 ml-0 lg:ml-8"
          />
        </motion.section>
      </div>
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

export default Service;
