import React from 'react';
import { Footer, Navbar } from '../components'; // Adjust the relative path to the components folder
import styles from '../style.js';

const feedbacks = [
  { id: 1, name: "John Doe", feedback: "Tech2Globe provided exceptional service and their team is very professional." },
  { id: 2, name: "Jane Smith", feedback: "We had a great experience working with Tech2Globe. Highly recommended!" },
  { id: 3, name: "Samuel Green", feedback: "Their attention to detail and customer service is top-notch." },
  { id: 4, name: "Anna Lee", feedback: "The support team was very responsive and helped us every step of the way." },
  { id: 5, name: "Mike Brown", feedback: "Excellent service and great results. Will definitely work with them again." },
  { id: 6, name: "Emma Wilson", feedback: "Their expertise and dedication are unmatched. Highly satisfied!" },
  { id: 7, name: "Lucas White", feedback: "Professional and efficient service. Great experience overall." },
  { id: 8, name: "Sophia Johnson", feedback: "Top-notch quality and fantastic customer service." },
  { id: 9, name: "Oliver Davis", feedback: "They delivered more than what we expected. Highly impressed!" },
  { id: 10, name: "Mia Martinez", feedback: "The best team we've ever worked with. Outstanding performance." },
];

const FeedbackCard = ({ name, feedback }) => (
  <div className="bg-white text-black p-6 rounded-lg shadow-md m-4 max-w-sm">
    <p className="italic">"{feedback}"</p>
    <h5 className="text-lg font-semibold mt-4">- {name}</h5>
  </div>
);

const Client = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-1/4 text-white py-8">
        <h1 className="text-4xl font-semibold mb-4">Our Clients</h1>
        <p className="text-lg max-w-md text-center">
          Partnered with Clients Worldwide
        </p>
        <h6 className="max-w-md text-center ">
          Over the years, MoneyWolf has served these clients, building the prominence of its services and trust.
        </h6>
        <p className="text-center max-w-3xl">
          Your input is important to us. Please provide your valuable feedback.
        </p>
      </div>
      
      <section className="bg-primary-100 py-12">
      <h2 className="flex flex-col items-center justify-center h-1/4 text-white py-14">Client Feedback</h2>
        <div className="flex flex-wrap justify-center">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback.id} name={feedback.name} feedback={feedback.feedback} />
          ))}
        </div>
      </section>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      {/* Footer */}
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default Client;
