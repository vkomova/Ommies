const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/posts");

router.get("/test", postsCtrl.test);

module.exports = router;