import asyncHandler from "express-async-handler"
import Room from "../models/roomModal.js"


// Add new room

export const addNewRoom = asyncHandler(async (req, res) => {
    const { senderId, receiverId } = req.body;

    const existingRoom = await Room.findOne({
        members: { $all: [senderId, receiverId] }

    })
    try {
        if (existingRoom) {
            res.status(400).json({ message: "this room already made", })
        } else {
            const newRoom = new Room({

                members: [senderId, receiverId]
            })
            const saveRoom = await newRoom.save()
            return res.status(200).json(saveRoom)

        }
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err })
    }
})

// get by room id

export const getByRoomId = asyncHandler(async (req, res) => {
    try {
        const room = await Room.findById({
            members: { $in: [req.params.id] }
        })
        return res.status(200).json({ room })
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err })
    }
})