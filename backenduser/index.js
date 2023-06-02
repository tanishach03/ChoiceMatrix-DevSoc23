const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exp = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://tanctanc03:QDr4Fj06Xh1rjwYV@cluster0.rly9uik.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const projectData = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/projectData.json`, "utf-8")
);

const feedbackSchema = new mongoose.Schema({
  // projectId: {
  //   type: String,
  //   required: true,
  // },
  departmentId: {
    type: String,
    required: true,
  },
  ratings: {
    performance: { type: Number },
    ui_ux: { type: Number },
    pricing: { type: Number },
    support: { type: Number },
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// const login = (req, res) => {};

// const addEmployee = (req, res) => {};

// const getPurchases = (req, res) => {};

// app.get("/login", login);

// app.get("/register", register);

// app.post("/employees");

// app.get("/vote");

// app.get("/purchases");

app.post("/purchases/:userId/:projectId", async (req, res) => {
  const feedbackData = req.body;
  console.log(feedbackData);
  try {
    const prevAvgRatings = [4, 3, 4.2, 3.5];
    const currentAvgRatings = [];
    const quarterRatings = [];
    let sumPerformance = 0;
    let sumUIUX = 0;
    let sumPricing = 0;
    let sumSupport = 0;
    let avgPerformance = 0;
    let avgUIUX = 0;
    let avgPricing = 0;
    let avgSupport = 0;
    let l = feedbackData.length;
    for (object in feedbackData) {
      const { performance, ui_ux, pricing, support } =
        feedbackData[object].ratings;
      sumPerformance += performance;
      sumUIUX += ui_ux;
      sumPricing += pricing;
      sumSupport += support;
      avgPerformance = sumPerformance / l;
      avgUIUX = sumUIUX / l;
      avgPricing = sumPricing / l;
      avgSupport = sumSupport / l;
    }
    currentAvgRatings.push(avgPerformance);
    currentAvgRatings.push(avgUIUX);
    currentAvgRatings.push(avgPricing);
    currentAvgRatings.push(avgSupport);
    for (let i = 0; i < 4; i++) {
      quarterRatings.push(currentAvgRatings[i] - prevAvgRatings[i]);
    }
    console.log(quarterRatings);
    await Feedback.insertMany(feedbackData);
    res.status(200).json({ message: "Feedback submitted successfully" });
  } catch (err) {
    console.log("Error saving feedback to the database: ", err);
    res.status(500).json({ error: "Failed to save feedback" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("The app is listening at port 3000");
});
