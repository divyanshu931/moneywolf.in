import React from 'react';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  { imgSrc: 'https://webjoinsolutions.in/assets/images/traffic-management.png', description: 'Traffic Management' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/clock.png', description: 'Cloaking & Doorway' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/hosting.png', description: 'Hosting website Rank' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/ecommerce-website.png', description: 'E-Commerce Website' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/developemtn.png', description: 'Website Development' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/seo.png', description: 'Search Engine' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/mobile-application.png', description: 'Mobile Application' },
  { imgSrc: 'https://webjoinsolutions.in/assets/images/lead-generation.png', description: 'Lead Generation' },
];

const CaseStudyGrid = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    
    <div ref={sectionRef} className={` bg-primaray case-study-grid-container  ${sectionInView ? 'in-view' : ''}`}>
      <h2 className="case-title">Our Case Studies</h2>
      <div className='bg-primaray case-study-grid'>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} imgSrc={study.imgSrc} description={study.description} />
        ))}
      </div>
    </div>
  );
};

const CaseStudyCard = ({ imgSrc, description }) => {
  return (
    <div className='case-study-card '>
      <img src={imgSrc} alt={description} className="case-study-image" />
      <p className="case-study-description">{description}</p>
    </div>
  );
};

export default CaseStudyGrid;
