// Button.js - Demonstrates Props and State
import React, { useState } from 'react';
import './Button.css';

function Button({ text, color, onClick }) {
  // State: Making component interactive with click counter
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // If onClick prop is provided, call it
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="custom-button"
      style={{
        backgroundColor: color || 'lightblue',
      }}
    >
      {text || 'Click Me!'} - Clicked {count} times
    </button>
  );
}

export default Button;

