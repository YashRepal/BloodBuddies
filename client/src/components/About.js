import React from 'react';

// Import images
import dropImage from './Images/drop.png';
import innovationImage from './Images/innovation.png';
import networkImage from './Images/netwotk.png';
import notificationImage from './Images/noti.png';
import costImage from './Images/cost.png';
import saveImage from './Images/save.png';

const About = () => {
  return (
    <main>
      <section id="about-us">
        <div className="about">
          <h1 className="heading">What is this all about ?</h1>
          <br />
          <p className="head-des text">
            We solve the problem of blood emergencies by connecting
            <span className="one-line">
              <br />
            </span>
            blood donors directly with people in blood need.
          </p>
          <div className="row">
            <div className="about-col">
              <div className="image">
                <img src={dropImage} alt="Drop" />
              </div>
              <h3>What we do ?</h3>
              <p>
                We connect blood donors with recipients, without any intermediary
                such as blood banks, for an efficient and seamless process.
              </p>
            </div>
            <div className="about-col">
              <div className="image">
                <img src={innovationImage} alt="Innovation" />
              </div>
              <br />
              <h3>Innovative</h3>
              <p>
                Blood Buddy is an innovative approach to address global health. We
                provide <span>immediate access</span> to blood donors.
              </p>
            </div>
            <div className="about-col">
              <div className="image">
                <img src={networkImage} alt="Network" />
              </div>
              <h3>Network</h3>
              <p>
                Blood Buddy is one of several community organizations working
                together as a network that responds to emergencies in an efficient
                manner.
              </p>
            </div>
            <div className="about-col">
              <div className="image">
                <img src={notificationImage} alt="Notification" />
              </div>
              <h3>Get notified</h3>
              <p>
                Blood Buddy Connect works with network partners to connect blood
                donors and recipients through an automated SMS service and a mobile
                app.
              </p>
            </div>
            <div className="about-col">
              <div className="image">
                <img src={costImage} alt="Cost" />
              </div>
              <h3>Totally Free</h3>
              <p>
                Blood Budyy's ultimate goal is to provide an easy-to-use,
                easy-to-access, fast, efficient, and reliable way to get
                life-saving blood, totally <span>Free of cost.</span>
              </p>
            </div>
            <div className="about-col">
              <div className="image">
                <img src={saveImage} alt="Save" />
              </div>
              <h3>Save Life</h3>
              <p>
                We are a non-profit foundation, and our main objective is to make
                sure that everything is done to protect vulnerable persons.
                <span>Help us by making a gift!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
