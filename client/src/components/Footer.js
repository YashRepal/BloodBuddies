import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="siteFooterBar">
        <div className="content1">
          <div className="foot">2021 © All rights reserved.</div>
        </div>
      </div>
      <div className="footer-content">
        <h3>JOIN OUR CAUSE</h3>
        <p>
          Donating blood or platelets can be intimidating and even scary. Time to put those hesitations
          and fears aside. Learn from Blood Buddy and platelet donors how simple and easy it is to roll up a
          sleeve and help save lives.
        </p>
        <div className="socials">
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/givebloodnhs/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/indiablooddonation/?hl=en" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="http://nbtc.naco.gov.in/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;