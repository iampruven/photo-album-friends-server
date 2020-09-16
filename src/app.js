require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require('./config')
const app = express();
const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router");
const postRouter = require("./post/post-router");
const GroupingRouter = require("./grouping/grouping-router");
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/images', postRouter);
app.use('/api/album', GroupingRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use((error, req, res, next) => {//eslint-disable-line no-unused-vars
  let message;
  if (NODE_ENV === "production") {
    message = { error: { message: "server error" } };
  } else {
    console.error(error);
    message = { message: error.message, error }
  }
  res.status(500).json(message);
});

module.exports = app;
