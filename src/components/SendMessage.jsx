import React, { useState } from 'react';

const SendMessage = ({ onSendMessage }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onSendMessage(text);
      setText('');
    } else {
      console.log('Cannot be empty');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="input">
      <form className='send-message' onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Upišite vašu poruku i prtisnute ENTER"
          autoFocus={true}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default SendMessage;