import React from 'react';
import {
  tourTravelImg,
  shoppingImg,
  realEstateImg,
  interiorImg,
  agricultureImg,
  machinesImg,
  groceryImg,
  eventsImg,
  educationImg,
  pestControlImg,
  carRentingImg,
  portalsImg
} from '../assets';

const industries = [
  { name: "Tour & Travel", image: tourTravelImg },
  { name: "Shopping", image: shoppingImg },
  { name: "Real Estate", image: realEstateImg },
  { name: "Interior", image: interiorImg },
  { name: "Agriculture", image: agricultureImg },
  { name: "Machines", image: machinesImg },
  { name: "Grocery", image: groceryImg },
  { name: "Events", image: eventsImg },
  { name: "Education", image: educationImg },
  { name: "Pest Control", image: pestControlImg },
  { name: "Car Renting", image: carRentingImg },
  { name: "Portals", image: portalsImg }
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">WORK FOR ANY INDUSTRY</h1>
          <h2 className="section-subtitle">Best Solutions, For All Organizations</h2>
        </div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <img src={industry.image} alt={industry.name} className="industry-image" />
              <p className="industry-description">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
