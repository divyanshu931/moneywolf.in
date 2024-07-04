import React from 'react';
import { website,pay_per_click,film,mobile_development,gdesign, socailmedai} from '../assets';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Website Development",
    description: "Capture attention with stunning website designs that make a lasting impression. Stand out from the crowd and engage your audience.",
    icon: website // Replace with actual icon path
  },
  {
    title: "Graphic Designing",
    description: "We provide expert graphic design services to help businesses and organizations create a visually compelling and effective brand identity.",
    icon: socailmedai // Replace with actual icon path
  },
  {
    title: "Video Creation",
    description: "Our video editing service offers professional and creative editing solutions for businesses and organizations.",
    icon: film // Replace with actual icon path
  },
  {
    title: "Mobile App Development",
    description: "We transform unique ideas into reality, creating tailored applications that align with your business goals and engage target audiences.",
    icon: mobile_development// Replace with actual icon path
  },
  {
    title: "Social Media Marketing",
    description: "Social media platforms provide an opportunity to reach a vast audience and increase brand visibility.",
    icon: gdesign // Replace with actual icon path
  },
  {
    title: "PPC Advertising",
    description: "PPC (Pay Per Click) advertising provides instant highly targeted visitor & leads for your business. Get an instant boost in your sales with our effective PPC services at low advertising spend.",
    icon: pay_per_click // Replace with actual icon path
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title">OUR TOP DIGITAL MARKETING SERVICES</h3>
          <h2 className="section-subtitle">We provide high quality services</h2>
          <p className="section-description">
            We bring our diverse background of advertising, design, branding, research & strategic planning for your business to make sure you get results. Whether you need a website and want to build strong online presence for your business to sell your products & services or simply need a digital marketing campaign. We handle it all. We create outstanding digital marketing campaigns and help customers to discover your products & services.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="services-button">
          <Link to="/service">
            <button className="btn btn-primary">View Service</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
