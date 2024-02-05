import asyncHandler from "express-async-handler"
import Message from "../models/messageModal.js"


// Add new Message

export const addNewMessage = asyncHandler(async (req, res) => {
    // const { senderId, receiverId } = req.body;

    // const existingRoom = await Room.findOne({
    //     members: { $all: [senderId, receiverId] }

    // })
    const newMessage = new Message(req.body)
    console.log("🚀 ~ file: messageControler.js:15 ~ addNewMessage ~ newMessage:", newMessage)
    try {

        const saveMessage = await newMessage.save()
        return res.status(200).json(saveMessage)

    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err })
    }
})

// get particular room chart
export const getRoomMessage = asyncHandler(async (req, res) => {
    // const { senderId, receiverId } = req.body;

    // const existingRoom = await Room.findOne({
    //     members: { $all: [senderId, receiverId] }

    // })
    // const newMessage = new Message(req.body)
    // console.log("🚀 ~ file: messageControler.js:15 ~ addNewMessage ~ newMessage:", newMessage)

    try {
        const message = await Message.find({ roomId: req.params.id })
        console.log("🚀 ~ file: messageControler.js:39 ~ getRoomMessage ~ message:", message)
        return res.status(200).json(message)
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err })
    }
})












