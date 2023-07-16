const asyncHandler = require("express-async-handler")


const getAllUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all user" })
    console.log("user")
})
const getUserById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get user by userId" })
    console.log("user")
})
const postUserProfileHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "update the user profile" })
    console.log("user")
})
const getAllBookmark = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all bookmark " })
    console.log("user")
})
const postBookmarKById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "ADD  post in the bookmark " })
    console.log("user")
})

const deleteBookmarKById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "delete post from the bookmark " })
    console.log("user")
})
const getAllUserPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "  get all user post  " })
})

const postUsersPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "  add user's post " })
})

const putUpdateUserPost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: " update user post   " })
})

const deleteUserPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "   " })
})



const postFollowHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "add follow to use " })
    console.log("user")
})
const postUnFollowHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "delete follow request " })
    console.log("user")
})


module.exports = { getAllUser, getUserById, postUserProfileHandler, getAllBookmark, postBookmarKById, deleteBookmarKById, postFollowHandler, postUnFollowHandler, getAllUserPosts, postUsersPosts, putUpdateUserPost, deleteUserPosts }