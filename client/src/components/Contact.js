// Import necessary dependencies
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/Contact.css';

// Import your image
// import logoImage from './Images/bb_logo(black).png';

// Define the Contact component
const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/contact', {
        name,
        email,
        phone,
        message,
      });

      console.log(response.data);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  // Render the Contact component
  return (
    <div className="donate-container">
      <div className="addgap"></div>
      <div className="make-center">
        <div className="container">
          <div className="contact-box">
            <div className="left">
              {/* You can add content or components on the left side if needed */}
            </div>
            <div className="right">
              <h2>Connect with us</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="field"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="field"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="field"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <textarea
                  placeholder="Message"
                  className="field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="addgap"></div>
    </div>
  );
};

// Export the Contact component
export default Contact;
