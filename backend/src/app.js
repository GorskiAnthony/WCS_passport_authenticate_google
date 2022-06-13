require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const authRouter = require("./routes/auth");
const passportConfig = require("./helper/passportConfig");

const { SECRET_KEY } = process.env;

app.use(cors());

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
module.exports = app;
