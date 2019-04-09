const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  social: {
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    github: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Profile", profileSchema);
