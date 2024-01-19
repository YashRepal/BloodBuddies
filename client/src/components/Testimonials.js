import React from 'react';

// Import images
import reviewImage1 from './Images/review-1.PNG';
import reviewImage2 from './Images/review-2.PNG';
import reviewImage3 from './Images/review-3.PNG';

const Testimonials = () => {
  return (
    <section className="customer-review">
      <div className="row-customer">
        <h2>Testimonials<br />See what our users have to say</h2>
      </div>
      <div className="row-customer">
        <div className="col-customer span-1-of-3-customer customer-box">
          <div className="customer-text-box">
            Blood Buddy is just awesome! I just donated for the first time and it could not have been
            easier. Blood Buddy is doing a very important work and I'm happy that I could contribute. It's
            hygienic, safe, and convenient, I recommend it to everyone!
          </div>
          <div className="customer">
            <img src={reviewImage3} alt="CustomerPhoto" />
            <p>Esha Puri</p>
          </div>
        </div>

        <div className="col-customer span-1-of-3-customer customer-box">
          <div className="customer-text-box">
            I found Blood Buddy at a time that my mother was in urgent need of blood. Blood Buddy arranged the
            required amount in no time. It saved us a lot of hassle and worry especially in such a trying
            time.<br /> Thank you Blood Buddy!
          </div>
          <div className="customer">
            <img src={reviewImage2} alt="CustomerPhoto" />
            <p>Amit Mangal</p>
          </div>
        </div>
        <div className="col-customer span-1-of-3-customer customer-box">
          <div className="customer-text-box">
            I have been a part of this organization for quite some time and each time I'm amazed by the seamless
            and efficient system in place. The importance of timely care especially in the recent times is known
            and having Blood Buddy takes a load off my mind.
          </div>
          <div className="customer">
            <img src={reviewImage1} alt="CustomerPhoto" />
            <p>Dr. Kabir Khatri</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
