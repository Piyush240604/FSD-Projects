// Card.js - Demonstrates Props
import React from 'react';
import './Card.css';

function Card({ title, description, imageUrl, footer }) {
  return (
    <div className="card">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="card-image" />
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Card;

