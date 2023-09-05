import asyncHandler from "express-async-handler"
import User from "../models/userModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


//  GET ALL USER
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
//  GET ALL USER
export const getUserById = asyncHandler(async (req, res) => {
    let users;
    try {
        users = await User.findById(req.params.id)
    } catch (error) {
        console.log("🚀 ~ file: userControler.js:9 ~ getAllUser ~ error:", error)
    }
    if (!users) {
        res.status(404).json({ message: "User Not Found" })
    }
    return res.status(200).json({ users })
})

// UPDATE THE SINGLE USER
export const updateUserDetails = asyncHandler(async (req, res) => {
    if (req.body.userId === req.params.userId) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
            res.status(200).json({ message: "Operation successful", user: user })
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(403).json({ message: "You cant not update your account" })
    }
})

// FOLLOW THE ANOTHER USER
export const followTheUser = asyncHandler(async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json({ message: 'User follow successfully' })
            } else {
                res.status(403).json({ message: 'User already follow' })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(403).json({ message: 'You can not follow yourself' })
    }
})
// UN FOLLOW THE ANOTHER USER
export const unFollowTheUser = asyncHandler(async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json({ message: 'unFollow successfully' })
            } else {
                res.status(403).json({ message: 'You Can not unFollow' })
            }
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(403).json({ message: 'You can not follow this user' })
    }
})