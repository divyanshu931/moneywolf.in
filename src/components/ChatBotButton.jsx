import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Assuming your Chatbot component is in Chatbot.js

const ChatBotButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={`chatbot-button-container ${isChatOpen ? 'open' : ''}`}>
      <button className="chatbot-button" onClick={toggleChat}>
        <span role="img" aria-label="chat">💬</span> Chat
      </button>
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default ChatBotButton;
