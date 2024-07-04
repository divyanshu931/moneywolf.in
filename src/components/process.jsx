// ProcessSteps.js
import React from 'react';

const steps = [
  {
    icon: 'https://webjoinsolutions.in/assets/images/process1.png',
    title: "01. Research Project",
  },
  {
    icon:'https://webjoinsolutions.in/assets/images/process2.png',
    title: "02. Find Ideas",
  },
  {
    icon: 'https://webjoinsolutions.in/assets/images/process3.png',
    title: "03. Start Optimize",
  },
  {
    icon: 'https://webjoinsolutions.in/assets/images/process4.png',
    title: "04. Reach Target",
  },
];

const ProcessSteps = () => {
  return (
    <div className="process-steps">
      <h2 className="case-title">Our Process</h2>
      {steps.map((step, index) => (
        <div key={index} className="process-step">
          <div className="process-icon-wrapper">
            <img src={step.icon} alt={step.title} className="process-icon" />
          </div>
          <h4 className="process-title">{step.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
