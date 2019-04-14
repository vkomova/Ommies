const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postsCtrl = require("../../controllers/posts");

router.get("/test", postsCtrl.test);
router.post("/", postsCtrl.create);
router.get("/viewallposts", postsCtrl.viewall);
router.post("/deletepost", postsCtrl.deletePost);
router.get("/:id", postsCtrl.viewone);
router.post("/like/:id", checkAuth, postsCtrl.like);
router.post("/unlike/:id", checkAuth, postsCtrl.unlike);
router.post("/comment/:id", checkAuth, postsCtrl.comment);
router.delete("/comment/:id/:comment_id", checkAuth, postsCtrl.deletecomment);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
