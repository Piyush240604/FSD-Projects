// App.js - Main Application Component
// Demonstrates Component Hierarchy and Integration
import React, { useState } from 'react';
import './App.css';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import EventDemo from './components/EventDemo';
import UserRegistrationForm from './components/UserRegistrationForm';
import TextInput from './components/TextInput';

function App() {
  const [section, setSection] = useState('core'); // State for navigation

  // Event handler passed as prop
  const handleButtonClick = () => {
    alert('Button clicked from App component!');
  };

  return (
    <div className="App">
      {/* Header Component - Component Hierarchy */}
      <Header 
        title="React Assignment - Core Concepts, Events & Forms"
        subtitle="Demonstrating React Fundamentals"
      />

      {/* Navigation */}
      <nav className="navigation">
        <button 
          onClick={() => setSection('core')}
          className={section === 'core' ? 'nav-button active' : 'nav-button'}
        >
          Core Concepts
        </button>
        <button 
          onClick={() => setSection('events')}
          className={section === 'events' ? 'nav-button active' : 'nav-button'}
        >
          Events
        </button>
        <button 
          onClick={() => setSection('forms')}
          className={section === 'forms' ? 'nav-button active' : 'nav-button'}
        >
          Forms
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Core Concepts Section */}
        {section === 'core' && (
          <section className="section">
            <h2>React Core Concepts</h2>
            
            <div className="concept-section">
              <h3>1. Components & Props</h3>
              <p>Buttons below demonstrate reusable components with props:</p>
              <div className="button-group">
                <Button text="Login" color="#4caf50" onClick={handleButtonClick} />
                <Button text="Logout" color="#f44336" />
                <Button text="Cancel" color="#ff9800" />
                <Button text="Submit" color="#2196f3" />
              </div>
            </div>

            <div className="concept-section">
              <h3>2. Component Reusability - Cards</h3>
              <p>Cards demonstrate props and component reuse:</p>
              <div className="card-group">
                <Card
                  title="React Components"
                  description="Components are reusable pieces of UI that accept props as input."
                  footer="Component Example"
                />
                <Card
                  title="React State"
                  description="State allows components to be interactive and manage data that changes over time."
                  footer="State Example"
                />
                <Card
                  title="React Props"
                  description="Props (properties) are read-only data passed from parent to child components."
                  footer="Props Example"
                />
              </div>
            </div>

            <div className="concept-section">
              <h3>3. State Management</h3>
              <p>The buttons above use useState hook to track click counts. Each button maintains its own state independently.</p>
              <TextInput />
            </div>
          </section>
        )}

        {/* Events Section */}
        {section === 'events' && (
          <section className="section">
            <EventDemo />
          </section>
        )}

        {/* Forms Section */}
        {section === 'forms' && (
          <section className="section">
            <UserRegistrationForm />
          </section>
        )}
      </main>

      {/* Footer Component - Component Hierarchy */}
      <Footer />
    </div>
  );
}

export default App;
