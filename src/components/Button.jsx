import React from 'react';

const Button = ({ styles }) => {
  const handleCallClick = () => {
    window.location.href = 'tel:+917827463160'; // Replace with your Indian phone number
  };

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-black font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={handleCallClick}
    >
      Connect on call
    </button>
  );
}

export default Button;
