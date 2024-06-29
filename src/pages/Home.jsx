import React from 'react';
import Wave from 'react-wavify';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from '../components';
import styles from '../style.js';

const Home = () => {
  return (
    <div className='bg-primary'>
      {/* Navbar */}
      <div className={`${styles.flexCenter} ${styles.navbarHeight}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`${styles.flexCenter} min-h-screen`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      {/* Wave Animation */}
      <div className={`${styles.flexCenter} bg-primary`} style={{ marginTop: '20px' }}>
        <Wave
          fill="#4D869C"
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 8,
          }}
        />
      </div>

      {/* Main Content Section */}
      <div className={`${styles.flexCenter} min-h-screen pt-10 pb-10`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
