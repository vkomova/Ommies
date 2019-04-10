const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postsCtrl = require("../../controllers/posts");

router.get("/test", postsCtrl.test);
router.post("/", checkAuth, postsCtrl.create);
router.get("/", postsCtrl.viewall);
router.get("/:id", postsCtrl.viewone);
router.delete("/:id", checkAuth, postsCtrl.deletepost);
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
