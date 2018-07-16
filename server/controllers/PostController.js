const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Post/Profile model
const Post = require("../models/Post");
const Profile = require("../models/Profile");

// Load Input Validation
const validatePostInput = require("../validation/post");

// @Route   GET /posts
// @Desc    Get posts
// @Access  Pubplic
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No posts found" }));
});

// @Route   GET /posts/:id
// @Desc    Get post by Id
// @Access  Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No post found" }));
});

// @Route   POST /posts
// @Desc    Create post
// @Access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // To check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @Route   DELETE /posts/:id
// @Desc    Delete post by Id
// @Access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for the post owner
          if (post.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          // Delete
          post
            .remove()
            .then(() =>
              res.json({ success: true, msg: "post successfully deleted" })
            );
        })
        .catch(err => res.status(404).json({ nopostfound: "No post found" }));
    });
  }
);

module.exports = router;
