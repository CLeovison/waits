const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/", postController.createPost);
router.get("/", postController.getAllPosts);
router.get("/", postController.getPaginatedPosts); debugger
router.get("/:id", postController.getPostsByID);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;


