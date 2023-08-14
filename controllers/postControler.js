import asyncHandler from "express-async-handler"
import Post from "../models/postsModal"
import User from "../models/userModel"
import mongoose from "mongoose";

// GET ALL POST
export const getAllPosts = asyncHandler(async (req, res) => {
    let posts;
    try {
        posts = await Post.find()
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:10 ~ getAllPosts ~ error:", error)
    }
    if (!posts) {
        return res.status(404).json({ message: "No post found" })
    }
    res.status(200).json({ posts })

})
// GET POST ID
export const getPostById = asyncHandler(async (req, res) => {
    const postId = req.params.id
    let posts;
    try {
        posts = await Post.findById(postId)
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:10 ~ getAllPosts ~ error:", error)
    }
    if (!posts) {
        return res.status(404).json({ message: "No post found" })
    }
    res.status(200).json({ posts })

})
//  ADD POST
export const addPosts = asyncHandler(async (req, res) => {
    const { caption, content, image, user, postId } = req.body
    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:48 ~ addPosts ~ error:", error)
    }
    if (!existingUser) {
        return res.status(404).json({ message: "No user found" })
    }
    const post = new Post({
        postId,
        caption,
        content,
        image,
        user
    })
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await post.save({ session })
        existingUser.posts.push(post)
        await existingUser.save({ session })
        await session.commitTransaction()

    } catch (error) {
        console.log("🚀 ~ file: postControler.js:31 ~ addPosts ~ error:", error)
        return res.status(500).json({ message: error })
    }
    return res.status(201).json({ post })


})
//  UPDATE POST
export const updatePost = asyncHandler(async (req, res) => {
    const { caption, content, image } = req.body
    const postId = req.params.id
    let post;
    try {
        post = await Post.findByIdAndUpdate(postId, {
            caption,
            content,
            image,
        })
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:31 ~ addPosts ~ error:", error)
    }
    console.log("🚀 ~ file: postControler.js:53 ~ updatePost ~ post:", post)
    if (!post) {
        return res.status(404).json({ message: "Unable to update" })
    }
    return res.status(201).json({ post })


})
//  DELETE POST
export const deletePost = asyncHandler(async (req, res) => {
    const postId = req.params.id
    let post;
    try {
        post = await Post.findByIdAndRemove(postId).populate("user")
        await post.user.posts.pull(post)
        await post.user.save()
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:31 ~ addPosts ~ error:", error)
    }
    console.log("🚀 ~ file: postControler.js:53 ~ updatePost ~ post:", post)
    if (!post) {
        return res.status(404).json({ message: "Unable to Delete" })
    }
    return res.status(201).json({ message: "Post deleted successfully " })


})
//  getUserPostById POST
export const getUserPostById = asyncHandler(async (req, res) => {
    const userId = req.params.id
    let userPosts;
    try {
        userPosts = await Post.findById(userId).populate("posts")

    } catch (error) {
        console.log("🚀 ~ file: postControler.js:31 ~ addPosts ~ error:", error)
    }
    console.log("🚀 ~ file: postControler.js:53 ~ updatePost ~ post:", post)
    if (!userPosts) {
        return res.status(404).json({ message: "Post Not Found" })
    }
    return res.status(200).json({ posts: userPosts })


})



// const getAllPosts = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: "get all the post " })
// })

// const getPostByPostId = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: " get post by post id  " })
// })


// const postLikeHandler = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: "like the post   " })
// })

// const deleteUnLikeHandler = asyncHandler(async (req, res) => {
//     res.status(200).json({ message: " unlike the post  " })
// })

// exports = { getAllPosts, getPostByPostId, postLikeHandler, deleteUnLikeHandler }