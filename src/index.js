require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const connectDB = require("./configs/database");

const app = express();

app.use(bodyParser.json());

// connecting to db here
connectDB(process.env.MONGO_URI);

app.use('/videos', videoRoutes);
app.use('/transcriptions', transcriptionRoutes);

// Defining a route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).json({
    message: "I am running",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
