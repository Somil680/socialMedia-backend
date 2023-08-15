import express from "express"
import mongoose from "mongoose"
import router from "./routes/userRoutes"
import postRouter from "./routes/postRoutes"
import cors from "cors"
const app = express()

const port = 5000

app.use(express.json())

app.use(cors())

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "successfully" })
// })
app.use("/api/user", router)
app.use("/api/post", postRouter)

// app.use("/api/user", require("./routes/userRoutes"))

mongoose.connect("mongodb+srv://somilagrawal1510:LhHSocQTH8SAMcWe@Socialmedia.gsctw1j.mongodb.net/?retryWrites=true&w=majority"
)
        .then(() => { app.listen(port) })
        .then(() => { console.log(`conn Server running on port ${port}`) })
        .catch((err) => { console.log(err) })
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })

// LhHSocQTH8SAMcWe