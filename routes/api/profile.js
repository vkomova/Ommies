const express = require("express");
const router = express.Router();
const profileCtrl = require("../../controllers/profile");
const mongoose = require("mongoose");

const Profile = require("../../models/profile");
const User = require("../../models/user");

router.use(require("../../config/auth"));
router.get("/", profileCtrl.view);
router.post("/", profileCtrl.createorupdate);
router.delete("/", profileCtrl.deleteUserandProfile);
router.get("/handle/:handle", profileCtrl.handleviewprofile);
router.get("/user/:user_id", profileCtrl.userviewprofile);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  console.log(req.user);
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
