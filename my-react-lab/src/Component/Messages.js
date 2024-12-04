import React from "react";
import PropTypes from 'prop-types';

function Messages({ messages }) {
  return (
    <div className="messages">
      <h3 className="msg">Messages</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Messages;



