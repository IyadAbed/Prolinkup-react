import React, { useState } from 'react';

const ChatWidget1 = ({ messages, onSendMessage, otherMessage, user }) => {
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

  // Combine and sort messages
  const combinedMessages = [...messages, ...otherMessage];
  combinedMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <div className="border border-gray-300 rounded p-4 h-80 bg-gray-200">
      <div className="overflow-y-auto h-full">
        {combinedMessages.length > 0 ? (
          combinedMessages.map((message, index) => (
            <div
              key={index}
              className={`chat ${message.sender.name !== user.name ? 'chat-end' : 'chat-start'}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src={`${message.sender.name !== user.name ? `${message.sender.imageUrl ? `${message.sender.imageUrl}`:`https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg`}` : `${user.imageUrl ? `${user.imageUrl}` : `https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg`}`}`} alt='hello' />
                </div>
              </div>
              <div className="chat-header">
                {message.sender.name}
                <time className="text-xs opacity-50">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </time>
              </div>
              <div className="chat-bubble">{message.content}</div>
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

export default ChatWidget1;
