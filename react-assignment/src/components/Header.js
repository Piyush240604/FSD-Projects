// Header.js - Component Hierarchy Example
import React from 'react';
import './Header.css';

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <h1>{title || 'My React App'}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
}

export default Header;

