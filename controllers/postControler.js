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
    const { caption, content, image, userId, postId } = req.body
    let existingUser;
    try {
        existingUser = await User.findById(userId)
    } catch (error) {
        console.log("🚀 ~ file: postControler.js:48 ~ addPosts  error:", error)
    }
    if (!existingUser) {
        return res.status(404).json({ message: "No user found" })
    }
    const post = new Post({
        postId,
        caption,
        content,
        userId,
        image,
        username: existingUser.username,
        profile_pic: existingUser.profile_pic,
    })
    console.log("🚀 ~ file: postControler.js:56 ~ addPosts ~ post:", post)
    try {
        console.log("🚀 ~ file: postControler.js:58 ~ addPosts ~ post:", post)
        // existingUser.posts.push(post)
        // await existingUser.save({ posts })

        // const session = await mongoose.startSession()
        // console.log("🚀 ~ file: postControler.js:59 ~ addPosts ~ session:", session)
        // session.startTransaction()
        // await post.save({ session })
        // existingUser.posts.push(post)
        // await existingUser.save({ session })
        // await session.commitTransaction()
        const session = await mongoose.startSession();
        session.startTransaction();
        // Save the new post
        await post.save({ session });
        // Push the post into the existingUser's posts array
        existingUser.posts.push(post);
        // Save the existingUser
        await existingUser.save({ session });
        // Commit the transaction
        await session.commitTransaction();
        session.endSession();
        console.log("Post added successfully!");
        return res.status(201).json({ post });

    } catch (error) {
        // console.log("🚀 ~ file: postControler.js:31 ~ addPosts ~ error:", error)
        // return res.status(500).json({ message: error })
        console.error("Error while adding the post:", error);

        // Rollback the transaction in case of an error
        // await session.abortTransaction();
        // session.endSession();

        return res.status(500).json({ message: "Error while adding the post" });
    }
    // return res.status(201).json({ post })


})
// export const addPosts = asyncHandler(async (req, res) => {
//     const { caption, content, image, userId, postId } = req.body;

//     // Get the existing user
//     let existingUser;
//     try {
//         existingUser = await User.findById(userId);
//         console.log("🚀 ~ file: postControler.js:114 ~ addPosts ~ existingUser:", existingUser)
//     } catch (error) {
//         console.error("Error while fetching the user:", error);
//         return res.status(500).json({ message: "Error while adding the post" });
//     }

//     // Check if the user exists
//     if (!existingUser) {
//         return res.status(404).json({ message: "No user found" });
//     }

//     // Create a new post
//     const post = new Post({
//         postId,
//         caption,
//         content,
//         image,
//         userId,
//         username: existingUser.username,
//         profile_pic: existingUser.profile_pic,
//     });
//     console.log("🚀 ~ file: postControler.js:134 ~ addPosts ~ post:", post)
//     // Start a transaction
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     try {
//         // Save the new post
//         await post.save({ session });
//         // Add the post to the user's posts array
//         existingUser.posts.push(post);
//         // Save the user
//         await existingUser.save({ session });
//         // Commit the transaction
//         await session.commitTransaction();
//         // End the session
//         session.endSession();
//         // Return the post
//         return res.status(201).json({ post });
//     } catch (error) {
//         // Rollback the transaction in case of an error
//         await session.abortTransaction();
//         session.endSession();
//         // Log the error
//         console.error("Error while adding the post:", error);
//         // Return an error response
//         return res.status(500).json({ message: "Error while adding the post" });
//     }
// });

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
// like THE OTHER post
export const likeThePost = asyncHandler(async (req, res) => {
    let users
    try {
        const post = await Post.findById(req.params.id);
        // users = await User.findById(req.body.userId)
        // console.log("🚀 ~ file: postControler.js:236 ~ likeThePost ~ users:", users)

        if (!post.like.includes(req.body.userId)) {
            await post.updateOne({ $push: { like: req.body.userId } });
            res.status(200).json({ message: " post has been liked" });
        } else {
            await post.updateOne({ $pull: { like: req.body.userId } });
            res.status(200).json({ message: "The post has been disliked" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}
)
// like THE OTHER post
export const bookmarkPost = asyncHandler(async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        const post = await Post.findById(req.body.postId)
        await users.updateOne({ $push: { bookmark: post } });
        res.status(200).json({ message: " post has been added", user: post });

    } catch (err) {
        res.status(500).json(err);
    }
}
)
export const removeBookmarkPost = asyncHandler(async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        const post = await Post.findById(req.body.postId)
        await users.updateOne({ $pull: { bookmark: post } });
        res.status(200).json({ message: "The post has been removed", user: users });

    } catch (err) {
        res.status(500).json(err);
    }
}
)