import React from 'react';
import { useInView } from 'react-intersection-observer';


const OurTech = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const techItems = [
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/1.png', description: 'HTML' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/2.png', description: 'CSS' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/3.png', description: 'JavaScript' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/4.png', description: 'Bootstrap' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/5.png', description: 'MySQL' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/7.png', description: 'Codeigniter' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/8.png', description: 'PHP' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/9.png', description: 'WordPress' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/10.png', description: 'Photoshop' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/11.png', description: 'Laravel' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/11.png', description: 'Corel Draw' },
    { imgSrc: 'https://webjoinsolutions.in/assets/images/technology/style2/12.png', description: 'Shopify' },
    { imgSrc: 'https://www.pngkey.com/png/full/222-2224712_react-react-logo-png.png', description: 'React' },
    { imgSrc: 'https://th.bing.com/th/id/R.2464523594ecb1003b4f2cd1e6a92a4b?rik=U%2bCpa2O22d28yQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-6PUDGwhQeYw%2fVUyhbufVKlI%2fAAAAAAAAAOc%2f5O72KgZqV3I%2fs1600%2flogo_nodejs.png&ehk=lC9Gb978KC3bRWHMCpAMp7Ke1ZisUwQSlvMEUmPARis%3d&risl=&pid=ImgRaw&r=0', description: 'Node' },
    { imgSrc: 'https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png', description: 'MERN' },
  ];

  return (
   
      <div className='container bg-primaray'>
        
        <h1 className={`tech-title ${sectionInView ? 'animation-left' : ''}`}>MARKETING & WEB AGENCY</h1>
        <h1 className={`tech-title ${sectionInView ? 'animation-right' : ''}`}>DIGITAL MARKETING & WEB</h1>
        <div className="tech-grid">
          {techItems.map((item, index) => (
            <div key={index} className="tech-card">
              <div className="tech-image-wrapper">
                <img src={item.imgSrc} alt={item.description} className="tech-image" />
              </div>
              <p className="tech-description">{item.description}</p>
            </div>
          ))}
       
      </div>
    </div>
  );
};

export default OurTech;
