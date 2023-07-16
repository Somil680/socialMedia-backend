const express = require("express")
const router = express.Router()
const { getAllUser, getUserById, postUserProfileHandler, getAllBookmark, postBookmarKById, deleteBookmarKById, postFollowHandler, postUnFollowHandler, getAllUserPosts, postUsersPosts, putUpdateUserPost, deleteUserPosts } = require("../controllers/userControler")

// Handle All user 
router.get("/", getAllUser)
router.get("/profile/:userId", getUserById)

// Handle update user profile
router.post("/edit", postUserProfileHandler)

// Handle Bookmark  of posts
router.get("/bookmark", getAllBookmark)
router.post("/bookmark/:postId", postBookmarKById)
router.delete("/bookmark/:postId", deleteBookmarKById)

// Handle Follow/unFollow req
router.post("/follow/:followUerId", postFollowHandler)
router.post("/follow/:followUserId", postUnFollowHandler)

// Handle  user  post
router.get("/post", getAllUserPosts)
router.post("/post/:postId", postUsersPosts)
router.put("/post/:postId", putUpdateUserPost)
router.delete("/post/:postId", deleteUserPosts)




module.exports = router