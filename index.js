import express from "express"
import mongoose from "mongoose"
import router from "./routes/userRoutes.js"
import postRouter from "./routes/postRoutes.js"
import authRouter from "./routes/authRoutes.js"
import cors from "cors"
import dotenv from 'dotenv';
import fileUpload from "express-fileupload"
import fileRouter from "./routes/uploadFileRoutes.js"

const app = express()
dotenv.config();

const port = 5000
app.use(fileUpload({
        useTempFiles: true
}))
app.use(cors())
app.use(express.json())

app.use("/api/user", router)
app.use("/api/post", postRouter)
app.use("/api/auth", authRouter)
app.use("/api/uploadFile", fileRouter)


mongoose.connect("mongodb+srv://somilagrawal1510:LhHSocQTH8SAMcWe@Socialmedia.gsctw1j.mongodb.net/?retryWrites=true&w=majority"
)
        .then(() => { app.listen(port) })
        .then(() => { console.log(`conn Server running on port ${port}`) })
        .catch((err) => { console.log(err) })

// LhHSocQTH8SAMcWe