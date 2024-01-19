import React, { useState } from "react";
import "./styles/Donate.css"; // Import the CSS module
// import logoImage from "./Images/bb_logo(black).png";
// import regPhotoImage from "./Images/regphoto.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Donate = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setMobile(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePincodeChange = (e) => setPincode(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleBirthdateChange = (e) => setDateOfBirth(e.target.value);
  const handleBloodGroupChange = (e) => setBloodGroup(e.target.value);
  const [isDonationSuccessful, setIsDonationSuccessful] = useState(false);


  const postUrl = 'http://localhost:3001/donors';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const formData =  {
      name,
      email,
      mobile,
      address,
      city,
      pincode,
      gender,
      dateOfBirth,
      bloodGroup
    };

    try {
      const response = await axios.post(postUrl,formData);
      console.log("Response: ", response.data);
      setIsDonationSuccessful(true);
      setTimeout(() => {
        navigate("/"); // Redirect to the home page
      }, 3000);

    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="donate-container">
            <div className="addgap"></div>

      {/* <nav className="register-nav">
        <div className="register-header-logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>
        <div className="register-header-list">
          <ul>
            <li>
              <Link to="/" className="register-get-help">
                Home
              </Link>
            </li>

          </ul>
        </div>
      </nav> */}
      <div className="make-center">
      <div className="inner">
        {/* <div className="photo">
          <img src={regPhotoImage} alt="Registration" />
        </div> */}
        <div className="user-form">
          <h1>Donate And Save Lives</h1>

          <form onSubmit={handleSubmit}>
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <i className="fas fa-envelope-square"></i>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <i className="fas fa-phone"></i>
            <input
              type="text"
              placeholder="Phone Number"
              value={mobile}
              onChange={handlePhoneChange}
            />
            <br />
            <i className="fas fa-map-marker-alt"></i>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={handleAddressChange}
            />
            <br />
            <i className="fas fa-city"></i>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={handleCityChange}
            />
            <br />
            <i className="fas fa-map-pin"></i>
            <input
              type="text"
              placeholder="Pincode"
              value={pincode}
              onChange={handlePincodeChange}
            />
            <br />
            <i className="fas fa-venus-mars"></i>
            <select value={gender} onChange={handleGenderChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <i className="fas fa-birthday-cake"></i>
            <input
              type="date"
              placeholder="Birthdate"
              value={dateOfBirth}
              onChange={handleBirthdateChange}
            />
            <br />
            <i className="fas fa-tint"></i>
            <select value={bloodGroup} onChange={handleBloodGroupChange}>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="O+">O+</option>
              <option value="O+">AB+</option>
              <option value="O+">A-</option>
              <option value="O+">B-</option>
              <option value="O+">O-</option>
              <option value="O+">AB-</option>
            </select>
            <br />

            <div className="action-btn">
              <button className="btn primary" type="submit">
                Submit
              </button>

              {/* <button className="btn">Skip</button> */}
            </div>
          </form>
        </div>
      </div>
      </div>
      {isDonationSuccessful && (
  <div
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid black',
      backgroundColor: 'green',
      color: 'white',
      fontSize: '24px',
      fontWeight: '700',
      padding: '20px',  // Adjust the padding to make it a square box
      width: '200px',   // Adjust the width to make it a square box
      height: '200px',  // Adjust the height to make it a square box
      textAlign: 'center',
    }}
    className="donate-success-message"
  >
    Successfully registered for donation!
  </div>
)}




      <div className="addgap"></div>
    </div>
  );
};

export default Donate;
