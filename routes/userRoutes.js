import express from "express"
const router = express.Router()
import { getAllUser, updateUserDetails, followTheUser, unFollowTheUser } from "../controllers/userControler"

// Handle All user 
router.get("/", getAllUser)
router.patch("/:id", updateUserDetails)
router.put("/:id/follow", followTheUser)
router.put("/:id/unfollow", unFollowTheUser)


export default router

