const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Donor = require("./models/donor");
const connectDB = require("./config/db");
const createDonor = require("./routes/donorRoutes/createDonor");
const getDonors = require("./routes/donorRoutes/getDonors");
const contact = require("./routes/contact");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.use("/", createDonor);
app.use("/", getDonors);
app.use("/", contact);

app.listen(port, () => {
  console.log(`Server running at : http://localhost:${port}/`);
});
