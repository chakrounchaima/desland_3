import React, { useState } from 'react';

const Signup = ({ onSwitchForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here using the formData state
    console.log('Form submitted:', formData);
    // Example: You can make an API call for user registration here
  };

  const switchToLogin = () => {
    onSwitchForm(); // Call the onSwitchForm function to switch to the login form
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form className="sign-up" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className="mini-input"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          className="mini-input"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label>
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
          />
          I agree with privacy and policy
        </label>

        <button type="submit">Sign Up</button>
      </form>

      <h6>
        Already have an account?{' '}
        <span onClick={switchToLogin}>Login now.</span>
    </h6>
    </>
  );
};

export default Signup;
