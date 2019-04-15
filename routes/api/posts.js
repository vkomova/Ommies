const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postsCtrl = require("../../controllers/posts");

router.post("/", postsCtrl.create);
router.get("/viewallposts", postsCtrl.viewall);
router.post("/deletepost", postsCtrl.deletePost);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
