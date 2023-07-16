const express = require("express")
const router = express.Router()
const { getAllPosts, getPostByPostId, postLikeHandler, deleteUnLikeHandler } = require("../controllers/postControler")


router.get("/", getAllPosts)
router.get("/:postId", getPostByPostId)


router.post("/post/:postId", postLikeHandler)
router.delete("/post/:postId", deleteUnLikeHandler)

module.exports = router