import React from 'react';
import Wave from 'react-wavify';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials, Services, Industries, OurTech, CaseStudyGrid, ProcessSteps } from '../components';
import styles from '../style.js';

const Home = () => {
  return (
    <div className='bg-dimWhite'>
      {/* Navbar */}
      <div className={`${styles.flexCenter} ${styles.navbarHeight}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`${styles.flexCenter}   min-h-screen` }style={{ backgroundColor: '#ADD8E6' }}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      {/* Wave Animation */}
      <div className="relative">
        <Wave
          fill="#F7F9F2"
          paused={false}
          options={{
            height: 40,
            amplitude: 20,
            speed: 0.25,
            points: 4,
          }}
          className="absolute bottom-0 w-full"
        />
        <Wave
          fill="rgba(77, 134, 156, 0.5)"
          paused={false}
          options={{
            height: 20,
            amplitude: 15,
            speed: 0.2,
            points: 6,
          }}
          className="absolute bottom-0 w-full"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Main Content Section */}
      <div className={`${styles.flexCenter} min-h-screen pt-10 pb-10`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Services />
          <Business />
          <Billing />
          <CardDeal />
          <ProcessSteps />
          <Industries />
          <OurTech />
          <Testimonials />
          <CaseStudyGrid />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
