// EventDemo.js - Demonstrates React Events
import React, { useState } from 'react';
import './EventDemo.css';

function EventDemo() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [hoverCount, setHoverCount] = useState(0);
  const [keyPress, setKeyPress] = useState('');

  // onClick event
  const handleClick = () => {
    setMessage('Button was clicked!');
    setTimeout(() => setMessage(''), 2000);
  };

  // onClick with argument
  const handleClickWithArg = (id) => {
    setMessage(`Item ${id} was clicked!`);
    setTimeout(() => setMessage(''), 2000);
  };

  // onChange event
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // onMouseEnter event
  const handleMouseEnter = () => {
    setHoverCount(hoverCount + 1);
  };

  // onKeyDown event
  const handleKeyDown = (e) => {
    setKeyPress(`Key pressed: ${e.key}`);
    setTimeout(() => setKeyPress(''), 2000);
  };

  // onFocus and onBlur events
  const handleFocus = () => {
    setMessage('Input field focused!');
  };

  const handleBlur = () => {
    setMessage('Input field lost focus!');
    setTimeout(() => setMessage(''), 2000);
  };

  // onDoubleClick event
  const handleDoubleClick = () => {
    setMessage('Double clicked!');
    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <div className="event-demo">
      <h2>React Events Demonstration</h2>
      
      <div className="event-section">
        <h3>1. onClick Event</h3>
        <button onClick={handleClick} className="event-button">
          Click Me!
        </button>
        <button onClick={() => handleClickWithArg(101)} className="event-button">
          Click with Argument (ID: 101)
        </button>
      </div>

      <div className="event-section">
        <h3>2. onChange Event</h3>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Type something..."
          className="event-input"
        />
        <p>You typed: <strong>{text}</strong></p>
        {keyPress && <p className="key-press">{keyPress}</p>}
      </div>

      <div className="event-section">
        <h3>3. onMouseEnter Event</h3>
        <div
          onMouseEnter={handleMouseEnter}
          className="hover-box"
        >
          Hover over me! (Hovered {hoverCount} times)
        </div>
      </div>

      <div className="event-section">
        <h3>4. onDoubleClick Event</h3>
        <div
          onDoubleClick={handleDoubleClick}
          className="double-click-box"
        >
          Double click me!
        </div>
      </div>

      {message && (
        <div className="message-display">
          {message}
        </div>
      )}
    </div>
  );
}

export default EventDemo;

