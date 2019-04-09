const Profile = require("../models/profile");
const User = require("../models/user");

// async function test(req, res) {
//   console.log("Profile works");
// }

function test(req, res, next) {
  console.log("Profile works");
}

function view(req, res) {
  const errors = {};
  Profile.findOne({ user: req.user.id })
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
}

function create(req, res) {
  console.log("test");
}

module.exports = {
  test,
  view,
  create
};
