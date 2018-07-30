const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Input Validation
const validateProfileInput = require("../validation/profile");

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
        if (!profile) {
          errors.noprofile = "No profile found for this user";
          return res.status(404).json(errors);
        }
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

// @Route   GET profile/handle/:handle
// @Desc    Get profile by handle
// @Access  Public
router.get("/handle/:handle", (req, res) => {
  const erros = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile || profile.length === 0) {
        errors.noprofile = "This user has no profile";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
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

// @Route   POST profile
// @Desc    Create/Edit user profile
// @Access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;

    if (req.body.bio) profileFields.bio = req.body.bio;
 
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.body.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        }
      }
    );
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
