import express from "express"
const router = express.Router()
import { getAllUser, updateUserDetails, followTheUser, unFollowTheUser, getUserById } from "../controllers/userControler"

// Handle All user 
router.get("/", getAllUser)
router.get("/:id", getUserById)
router.patch("/:id", updateUserDetails)
router.put("/:id/follow", followTheUser)
router.put("/:id/unfollow", unFollowTheUser)


export default router

