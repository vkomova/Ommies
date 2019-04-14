const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
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
          default: Date.now
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
