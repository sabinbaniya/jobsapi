const express = require("express");
const connectDB = require("./DB/connectDB");
const app = express();
require("dotenv").config();

const router = require("./routes/routes");

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;

const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, (err) => {
      if (err) return console.log(`Something Went Wrong`);
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Something Went Wrong : ${error}`);
  }
};

start();
