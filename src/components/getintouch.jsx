import React, { useState, useEffect } from 'react';

const GetInTouchModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setShowModal(true); // Show modal if it hasn't been shown before
      localStorage.setItem('modalShown', 'true'); // Set flag in localStorage
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend, show success message)
    console.log('Service:', service);
    console.log('Budget:', budget);
    console.log('Name:', name);
    console.log('Phone:', phone);
    // Close modal after submission (you can adjust this based on your design)
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="service">Choose a Service:</label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Select...</option>
                <option value="Web Development">Web Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO</option>
                {/* Add more options as needed */}
              </select>
              <label htmlFor="budget">Budget:</label>
              <input type="text" id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default GetInTouchModal;
