import express from "express"
import { getAllUser, updateUserDetails, followTheUser, unFollowTheUser, getUserById } from "../controllers/userControler.js"
const router = express.Router()

// Handle All user 
router.get("/", getAllUser)
router.get("/:id", getUserById)
router.patch("/:id", updateUserDetails)
router.put("/:id/follow", followTheUser)
router.put("/:id/unfollow", unFollowTheUser)



export default router
