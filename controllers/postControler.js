const asyncHandler = require("express-async-handler")


const getAllPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all the post " })
})

const getPostByPostId = asyncHandler(async (req, res) => {
    res.status(200).json({ message: " get post by post id  " })
})



const postLikeHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "like the post   " })
})

const deleteUnLikeHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: " unlike the post  " })
})

module.exports = { getAllPosts, getPostByPostId, postLikeHandler, deleteUnLikeHandler }