import React, { useState } from 'react';
import axios from 'axios';

const ChatWidget = ({ messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="border border-gray-300 rounded p-4 h-80">
      <div className="overflow-y-auto h-full">
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="mb-2">
              <p className="font-semibold">{message.sender.name}</p>
              <p className="text-gray-600">{message.content}</p>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <form className="mt-4" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;
