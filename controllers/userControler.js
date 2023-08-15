import asyncHandler from "express-async-handler"
import User from "../models/userModel"
import bcrypt from "bcryptjs"

export const getAllUser = asyncHandler(async (req, res) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log("🚀 ~ file: userControler.js:9 ~ getAllUser ~ error:", error)
    }
    if (!users) {
        res.status(404).json({ message: "User Not Found" })
    }
    return res.status(200).json({ users })
})

// POST  SIGNUP USER
export const signUp = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log("🚀 ~ file: userControler.js:9 ~ getAllUser ~ error:", error)
    }
    if (existingUser) {
        res.status(400).json({ message: "Already exist User" })
    }
    const hashPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashPassword,
        posts: [],
    })
    try {
        await user.save()
    } catch (error) {
        console.log("🚀 ~ file: userControler.js:36 ~ signUp ~ error:", error)

    }
    return res.status(201).json({ user })
})

// POST  LOGIN USER
export const logIn = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log("🚀 ~ file: userControler.js:9 ~ getAllUser ~ error:", error)
    }
    const passwordIsCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!passwordIsCorrect) {
        res.status(400).json({ message: "Incorrect Password" })
    }
    res.status(200).json({ user: existingUser })
})
export const getUserById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get user by userId" })
    console.log("user")
})
export const postUserProfileHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "update the user profile" })
    console.log("user")
})
export const getAllBookmark = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get all bookmark " })
    console.log("user")
})
export const postBookmarKById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "ADD  post in the bookmark " })
    console.log("user")
})

export const deleteBookmarKById = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "delete post from the bookmark " })
    console.log("user")
})
export const getAllUserPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "  get all user post  " })
})

export const postUsersPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "  add user's post " })
})

export const putUpdateUserPost = asyncHandler(async (req, res) => {
    res.status(200).json({ message: " update user post   " })
})

export const deleteUserPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "   " })
})



export const postFollowHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "add follow to use " })
    console.log("user")
})
export const postUnFollowHandler = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "delete follow request " })
    console.log("user")
})

