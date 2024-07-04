import React, { useState } from 'react';



const GetQuoteButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <div className={`get-quote-button-container ${isFormOpen ? 'open' : ''}`}>
        <button className="get-quote-button" onClick={toggleForm}>
          <span role="img" aria-label="message">💬</span> Get Quote
        </button>
        {isFormOpen && (
          <div className="quote-form-container">
            <form className="quote-form">
              <h3>Get a Quote</h3>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" required />
              </label>
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="button" className="btn btn-secondary" onClick={toggleForm}>Close</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default GetQuoteButton;
