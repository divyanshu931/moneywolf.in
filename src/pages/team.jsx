import React from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import styles from '../style.js';
import { people01, people02} from '../assets'; // Replace with actual image imports

const teamMembers = [
  {
    name: "Divyanshu",
    position: "CEO",
    image: people01,
    bio: "Divyanshu is a seasoned professional with over 20 years of experience in the tech industry.",
  },
  {
    name: "Deepak",
    position: "CTO",
    image: people02,
    bio: "Deepak is a technology visionary with a passion for innovation and problem-solving.",
  },
  {
    name: "Ayush",
    position: "COO",
    image: people01,
    bio: "Ayush has a strong background in operations management and business strategy.",
  },
  {
    name: "Isha",
    position: "CFO",
    image: people01,
    bio: "Isha is an expert in financial planning and analysis with a keen eye for detail.",
  },
];

const TeamMemberCard = ({ name, position, image, bio }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white text-black p-6 rounded-lg shadow-md m-4 max-w-sm"
  >
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
    <h4 className="text-xl font-semibold mb-2">{name}</h4>
    <h5 className="text-lg text-gray-700 mb-2">{position}</h5>
    <p className="mb-4">{bio}</p>
  </motion.div>
);

const OurTeam = () => {
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
        className="flex flex-col items-center justify-center h-1/4 text-white text-center py-8 bg-primary"
      >
        <h1 className="text-4xl font-semibold mb-4">Meet Our Team</h1>
        <p className="text-lg max-w-md text-center">
          Our team of dedicated professionals is here to help you achieve your goals.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className={`bg-black-gradient-2 ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col ${styles.paddingY} text-white primary`}>
            <div className="flex flex-wrap justify-center">
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={index} 
                  name={member.name} 
                  position={member.position} 
                  image={member.image} 
                  bio={member.bio} 
                />
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

export default OurTeam;
