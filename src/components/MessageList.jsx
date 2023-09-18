import React from "react";
import Message from './Message';

const MessageList = ({ messages, currentMember }) => {
  return (
    <div className="messages-list">
      {messages.map((m, index) => (
        <Message key={index} message={m} member={currentMember} />
      ))}
    </div>
  );
};

export default MessageList;