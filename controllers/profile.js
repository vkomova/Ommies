const Profile = require("../models/profile");
const User = require("../models/user");

const validateProfileInput = require("../validation/profile");

// async function test(req, res) {
//   console.log("Profile works");
// }

async function handleviewprofile(req, res) {
  const errors = {};
  Profile.findOne({ handle: req.params.handle })
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile created for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
}

async function userviewprofile(req, res) {
  const errors = {};
  console.log(req.params.user_id);
  Profile.findOne({ user: req.params.user_id })
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile created for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
}

function view(req, res) {
  const errors = {};
  Profile.findOne({ user: req.user._id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile created for this user";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
}

function createorupdate(req, res) {
  const { errors, isValid } = validateProfileInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const profileFields = {};
  profileFields.user = req.body.user;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.location) profileFields.location = req.body.location;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.github) profileFields.social.github = req.body.github;
  if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
  if (req.body.date) profileFields.date = req.body.date;

  Profile.findOne({ user: profileFields.user }).then(profile => {
    if (profile) {
      Profile.findOneAndUpdate(
        { user: profileFields.user },
        { $set: profileFields },
        { new: true }
      ).then(profile => res.json(profile));
    } else {
      Profile.findOne({ handle: profileFields.handle }).then(profile => {
        if (profile) {
          errors.handle = "That handle already exists";
          return res.status(400).json(errors);
        }
        new Profile(profileFields).save().then(profile => res.json(profile));
      });
    }
  });
}

function deleteUserandProfile(req, res) {
  Profile.findOneAndRemove({ user: req.user._id }).then(() => {
    User.findOneAndRemove({ _id: req.user._id }).then(() =>
      res.json({ success: true })
    );
  });
}

module.exports = {
  view,
  createorupdate,
  handleviewprofile,
  userviewprofile,
  deleteUserandProfile
};
