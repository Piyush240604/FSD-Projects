// TextInput.js - Demonstrates onChange Event
import React, { useState } from 'react';
import './TextInput.css';

function TextInput() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="text-input-demo">
      <h3>Text Input with onChange Event</h3>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="text-input"
      />
      <button onClick={handleClear} className="clear-button">
        Clear
      </button>
      <p className="display-text">
        You typed: <strong>{text || '(nothing yet)'}</strong>
      </p>
      <p className="character-count">
        Character count: {text.length}
      </p>
    </div>
  );
}

export default TextInput;

