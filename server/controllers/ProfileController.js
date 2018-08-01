const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Load Input Validation

// Load Profile/User Model
const Profile = require("../models/Profile");
const User = require("../models/User");

// @Route   GET /profile
// @Desc    Get current users profile
// @Access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name"])
      .then(profile => {
        // if (!profile) {
        //   errors.noprofile = "No profile found for this user";
        //   return res.status(404).json(errors);
        // }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @Route   GET profile/all
// @Desc    Get all profiles
// @Access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name"])
    .then(profiles => {
      if (!profile) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(prfiles);
    })
    .catch(err => res.status(404).json({ profile: "There are no profiles" }));
});

// @Route   GET profile/user/:user_id
// @Desc    Get profile by User ID
// @Access  Public
router.get("/user/:user_id", (req, res) => {
  const erros = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile || profile.length === 0) {
        errors.noprofile = "This user has no profile";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "No profile for this user" })
    );
});

// @Route   POST /profile
// @Desc    Create/Edit user profile
// @Access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Find User and then Create bio
    Profile.findByIdAndUpdate({ user: req.user.id })
      .then(() => {
        Profile.create({
          user: req.user.id,
          bio: req.body.bio,
          imgUrl: req.body.imgUrl
          // TODO: Insert ImageURL here
        },
        function(error, profile) {
          // This is a callback
          if (error) {
            return res
              .status(500)
              .send(
                "An error occurred while trying to add information to the database " +
                  error
              );
          } else {
            // Create a JWT token
            return res.status(200).send({ profile: profile });
          }
        }
      );

        // newProfile.save().then(Profile => res.json(Profile));
      })
      // .catch(err => res.status(404).json({ bio: "no bio here" }));
  }
);

// @Route   DELETE profile
// @Desc    Delete User and Profile
// @Access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true, msg: "User/Profile successfully deleted" })
      );
    });
  }
);
module.exports = router;
