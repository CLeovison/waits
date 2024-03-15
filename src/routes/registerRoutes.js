const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.post("/", registerController.createPost);
router.get("/", registerController.getAllPost);
router.put("/:id", registerController.updatePost);
router.delete("/:id", registerController.deletePost);

module.exports = router;

