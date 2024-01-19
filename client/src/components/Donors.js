import React, { useEffect, useState } from "react";
import axios from "axios";

const Donors = () => {
  // State to store the list of donors
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get("http://localhost:3001/donors")
      .then((response) => {
        // Update the state with the received data
        setDonors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching donors:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="volunteer" id="vol-sect">
      <div className="title-head">
        <h1 className="title">Our super heroes</h1>
      </div>
      <p className="content">
        We depend on volunteers! Volunteers make up 96% of our total
        <span className="line">
          <br />
        </span>
        workforce and carry on our humanitarian work. Blood donation is healthy,
        <span className="line">
          <br />
        </span>{" "}
        our volunteers are available 24/7 to help and donate blood. Blood banks
        store blood
        <span className="line">
          <br />
        </span>{" "}
        bags but our volunteers are there with you in an emergency for a blood
        transfusion real time.
      </p>

      <ul className="volunt">
        <div
          className="table-title-head"
          style={{ textAlign: "center", color: "white" }}
        >
          <h1 className="table-title" style={{ color: "white" }}>
            Our Super Heroes<br />"Our Donors"
          </h1>
        </div>

        <br />

        {donors.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }} > No donors available at the moment.</p>
        ) : (
          donors.map((donor, index) => (
            <li className="vol" key={donor._id}>
              <span className="vol-i number">{index + 1}</span>
              <span className="vol-i name">{donor.name}</span>
              <span className="vol-i location">
                {donor.city}, {donor.pincode}
              </span>
              <span className="vol-i blood group">
                {donor.bloodGroup}
                <i className="fa fa-tint" aria-hidden="true"></i>
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Donors;
