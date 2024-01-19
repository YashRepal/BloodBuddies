import React from 'react';
import bbLogoWhite from './Images/bb_logo(white).png';
import homeVideo from './video/homevideo1.mp4';
import { Link } from 'react-router-dom';

const Header = () => {
  const showMenu = () => {
    const headerl = document.getElementById("headerl");
    headerl.style.right = "0";
  }

  const hideMenu = () => {
    const headerl = document.getElementById("headerl");
    headerl.style.right = "-210px";
  }

  return (
    <header>
      <video autoPlay muted loop playsInline id="homevideo">
        <source src={homeVideo} type="video/mp4" />
      </video>
      <div id="logo">
        <Link to='/'><img src={bbLogoWhite} alt="Logo" /></Link>
      </div>
      <div id="nav">
        <div className="header-list" id="headerl">
          <i className="fa fa-times" onClick={hideMenu}></i>
          <ul>
            <li><Link className="scroll" to="/">Home</Link></li>
            {/* <li><a className="scroll" href="#vol-sect">Donors</a></li> */}
            <li><Link to="/donors" >Donors</Link></li>
            <li><Link to="/donate" >Donate</Link></li>
            <li><Link to="/contact" >Contact</Link></li>

            {/* <li><a href="help.html" target="_blank" rel="noopener noreferrer">Get Help</a></li> */}
          </ul>
        </div>
        <i className="fa fa-bars" onClick={showMenu}></i>
      </div>
      <div className="text-box">
        <h1>Start</h1>
        <h1>Saving Lives</h1>
        <p>Become a donor or request for blood and help save lives</p>
        <Link to='/donate' className="hero-btn" >Donate</Link>
      </div>
    </header>
  );
};

export default Header;