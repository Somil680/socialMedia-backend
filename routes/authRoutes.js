import express from "express"
const authRouter = express.Router()
import { signUp, logIn } from "../controllers/authControler"

// Handle All user 
authRouter.post("/signup", signUp)
authRouter.post("/login", logIn)


export default authRouter
