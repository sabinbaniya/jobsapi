const express = require("express");
const connectDB = require("./DB/connectDB");
const app = express();

const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const rateLimiter = require("express-rate-limit");

require("dotenv").config();
require("express-async-errors");

const jobsRouter = require("./Routes/jobs");
const authRouter = require("./Routes/auth");
const errorHandler = require("./Middlewares/ErrorHandler");
const Auth = require("./Middlewares/Auth");

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(cors());

app.use("/api/v1/jobs", Auth, jobsRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(errorHandler);

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
