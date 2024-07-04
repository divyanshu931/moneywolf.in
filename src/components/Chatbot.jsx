import React, { useState } from 'react';

const predefinedResponses = {
  'hi': 'Hello! How can I help you today?',
  'hello': 'Hi there! What can I do for you?',
  'what services do you offer?': 'We offer website development, graphic designing, video creation, mobile app development, social media marketing, and PPC advertising.',
  'how can I contact you?': 'You can contact us through the Contact Us page on our website.',
  'what is your pricing?': 'Our pricing varies depending on the service you need. Please contact us for a detailed quote.',
  'where are you located?': 'Our office is located at 123 Main Street, City, Country.',
  'what is your phone number?': 'You can reach us at +1-123-456-7890.',
};

const fallbackResponses = [
  { keyword: 'service', response: 'We offer website development, graphic designing, video creation, mobile app development, social media marketing, and PPC advertising.' },
  { keyword: 'phone', response: 'You can reach us at +1-123-456-7890.' },
  { keyword: 'address', response: 'Our office is located at 123 Main Street, City, Country.' },
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleUserMessage = () => {
    const userMessage = inputText.trim().toLowerCase();

    // Check if user input matches any predefined question
    const matchedQuestion = Object.keys(predefinedResponses).find(q => userMessage.includes(q.toLowerCase()));

    if (matchedQuestion) {
      // If matched, add the answer to messages
      setMessages(prevMessages => [
        ...prevMessages,
        { text: inputText, isUser: true },
        { text: predefinedResponses[matchedQuestion], isUser: false }
      ]);
    } else {
      // Check for specific keywords and respond accordingly
      let response = fallbackResponses.find(fb => userMessage.includes(fb.keyword))?.response;

      if (!response) {
        // If no match, suggest connecting with customer care or requesting a quote
        response = "I'm sorry, I can't understand. Please connect with our customer care or request a quote.";
      }

      setMessages(prevMessages => [
        ...prevMessages,
        { text: inputText, isUser: true },
        { text: response, isUser: false }
      ]);
    }

    // Clear the input field
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        Moneywolf Chatbot
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleUserMessage();
            }
          }}
        />
        <button onClick={handleUserMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
