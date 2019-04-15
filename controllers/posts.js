const Post = require("../models/post");
const Profile = require("../models/profile");

async function viewall(req, res) {
  const post = await Post.find({}).sort({ createdAt: -1 });
  await res.json(post);
}

function create(req, res) {
  const newPost = new Post({
    text: req.body.text,
    user: req.body.user
  });
  newPost.save().then(post => res.json(post));
}

function deletePost(req, res) {
  Post.findById({ _id: req.body._id }, function(err, post) {
    console.log(post);
    post.remove();
    post.save();
  });
}

module.exports = {
  deletePost,
  create,
  viewall
};
