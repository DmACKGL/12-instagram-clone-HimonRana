const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },

  text: {
    type: String,
  },

  imgUrl: {
    type: String,
    required: true
  },

  name: {
    type: String
  },

  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],

  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      date: {
        type: Date,
        deafult: Date.now
      }
    }
  ],
  
  date: {
    type: Date,
    deafult: Date.now
  }
});

module.exports = Post = mongoose.model("Post", PostSchema);
