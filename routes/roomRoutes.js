import express from "express"
import { addNewRoom, getByRoomId } from "../controllers/roomControler.js"
const roomRouter = express.Router()

roomRouter.post("/", addNewRoom)
roomRouter.get("/:id", getByRoomId)

export default roomRouter