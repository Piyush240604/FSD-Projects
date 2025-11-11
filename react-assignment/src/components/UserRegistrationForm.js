// UserRegistrationForm.js - Demonstrates React Forms (Controlled Components)
import React, { useState } from 'react';
import './UserRegistrationForm.css';

function UserRegistrationForm() {
  // Step 1: Initialize state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    country: '',
    interests: [],
    message: ''
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // Step 3: Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Handle checkboxes for interests
      setFormData(prevState => ({
        ...prevState,
        interests: checked
          ? [...prevState.interests, value]
          : prevState.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 1 || formData.age > 120) {
      newErrors.age = 'Age must be between 1 and 120';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh

    if (validateForm()) {
      setSubmittedData({ ...formData });
      console.log('Form Submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: '',
        country: '',
        interests: [],
        message: ''
      });
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      age: '',
      gender: '',
      country: '',
      interests: [],
      message: ''
    });
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>User Registration Form</h2>
      <p className="form-description">Demonstrating Controlled Components in React</p>

      <form onSubmit={handleSubmit} className="registration-form">
        {/* Text Input */}
        <div className="form-group">
          <label htmlFor="name">Name: <span className="required">*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email: <span className="required">*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Number Input */}
        <div className="form-group">
          <label htmlFor="age">Age: <span className="required">*</span></label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            min="1"
            max="120"
            className={errors.age ? 'error' : ''}
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        {/* Radio Buttons */}
        <div className="form-group">
          <label>Gender: <span className="required">*</span></label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        {/* Select Dropdown */}
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Checkboxes */}
        <div className="form-group">
          <label>Interests:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="interests"
                value="coding"
                checked={formData.interests.includes('coding')}
                onChange={handleChange}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="reading"
                checked={formData.interests.includes('reading')}
                onChange={handleChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="traveling"
                checked={formData.interests.includes('traveling')}
                onChange={handleChange}
              />
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formData.interests.includes('music')}
                onChange={handleChange}
              />
              Music
            </label>
          </div>
        </div>

        {/* Textarea */}
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="4"
          />
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>
      </form>

      {/* Display Current Form Data */}
      <div className="form-data-display">
        <h3>Current Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      {/* Display Submitted Data */}
      {submittedData && (
        <div className="submitted-data">
          <h3>✅ Form Submitted Successfully!</h3>
          <div className="submitted-info">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
            <p><strong>Gender:</strong> {submittedData.gender}</p>
            <p><strong>Country:</strong> {submittedData.country || 'Not specified'}</p>
            <p><strong>Interests:</strong> {submittedData.interests.join(', ') || 'None'}</p>
            {submittedData.message && (
              <p><strong>Message:</strong> {submittedData.message}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserRegistrationForm;

