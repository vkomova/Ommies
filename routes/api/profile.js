const express = require("express");
const router = express.Router();
const profileCtrl = require("../../controllers/profile");
const mongoose = require("mongoose");

const Profile = require("../../models/profile");
const User = require("../../models/user");

router.use(require("../../config/auth"));
router.get("/", checkAuth, profileCtrl.view);
router.post("/", checkAuth, profileCtrl.createorupdate);
router.get('/handle/:handle', profileCtrl.handleviewprofile);
router.get('/user/:user_id', profileCtrl.userviewprofile);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
