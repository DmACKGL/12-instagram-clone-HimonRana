const express = require("express");
const app = express();
const db = require("./db");
const passport = require("passport");
const path = require("path");

const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const ProfileController = require("./controllers/ProfileController");
const PostController = require("./controllers/PostController");

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
// app.use('/users', UserController);
app.use("/auth", AuthController);
app.use("/profile", ProfileController);
app.use("/posts", PostController);

// Server static assets if in product
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

module.exports = app;
