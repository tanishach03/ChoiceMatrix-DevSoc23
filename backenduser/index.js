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
  departmentId: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  ratings: {
    performance: Number,
    ui_ux: Number,
    pricing: Number,
    support: Number,
  },
});

const Feedback = mongoose.model("Fedback", feedbackSchema);

// const login = (req, res) => {};

// const addEmployee = (req, res) => {};

// const getPurchases = (req, res) => {};

// app.get("/login", login);

// app.get("/register", register);

// app.post("/employees");

// app.get("/vote");

// app.get("/purchases");

app.post("/purchases/:id", async (req, res) => {
  const feedbackData = req.body;
  try {
    const feedbackDocuments = [];
    for (projects of feedbackData.projects) {
      const { departmentId, projectId } = projectData;
      const ratings = req.body.ratings[projectId];

      const newFeedback = new Feedback({
        departmentId,
        projectId,
        ratings,
      });

      feedbackDocuments.push(newFeedback);
    }

    await Feedback.insertMany(feedbackDocuments);
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
