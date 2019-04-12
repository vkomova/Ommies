const Post = require("../models/post");
const Profile = require("../models/profile");

async function test(req, res) {
  console.log("Posts work");
}

async function viewall(req, res) {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
}

async function viewone(req, res) {
  Post.findById(req.params._id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
}

function create(req, res) {
  const newPost = new Post({
    text: req.body.text,
    // name: req.body.name,
    user: req.body.user
  });
  newPost.save().then(post => res.json(post));
}

function deletepost(req, res) {
  Profile.findOne({ user: req.user._id }).then(profile => {
    Post.findById(req.params._id)
      .then(post => {
        if (post.user.toString() !== req.user._id) {
          return res
            .status(401)
            .json({ notauthorized: "User not authorized to delete post" });
        }
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  });
}

function like(req, res) {
  Profile.findOne({ user: req.user._id }).then(profile => {
    Post.findById(req.params._id)
      .then(post => {
        if (
          post.likes.filter(like => like.user.toString() === req.user._id)
            .length > 0
        ) {
          return res
            .status(400)
            .json({ alreadyliked: "User already liked this post" });
        }
        post.likes.unshift({ user: req.user._id });
        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  });
}

function unlike(req, res) {
  Profile.findOne({ user: req.user._id }).then(profile => {
    Post.findById(req.params._id)
      .then(post => {
        if (
          post.likes.filter(like => like.user.toString() === req.user._id)
            .length === 0
        ) {
          return res
            .status(400)
            .json({ notliked: "You have not yet liked this post" });
        }
        const removeIndex = post.likes
          .map(item => item.user.toString())
          .indexOf(req.user._id);

        post.likes.splice(removeIndex, 1);

        post.save().then(post => res.json(post));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  });
}

function comment(req, res) {
  Post.findById(req.params._id)
    .then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        user: req.user._id
      };

      post.commments.unshift(newComment);

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: "No post found" }));
}

function deletecomment(req, res) {
  Post.findById(req.params._id)
    .then(post => {
      if (
        post.comments.filter(
          comment => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: "Comment does not exist" });
      }
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);
      post.comments.splice(removeIndex, 1);

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ postnotfound: "No post found" }));
}

module.exports = {
  test,
  create,
  viewall,
  viewone,
  deletepost,
  like,
  unlike,
  comment,
  deletecomment
};
