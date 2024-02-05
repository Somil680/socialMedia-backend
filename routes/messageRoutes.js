import express from "express"
import { addNewMessage, getRoomMessage } from "../controllers/messageControler.js"
const messageRouter = express.Router()

messageRouter.post("/", addNewMessage)
messageRouter.get("/:id", getRoomMessage)

export default messageRouter