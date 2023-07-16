const express = require("express")

const app = express()

const port = 5000

app.use(express.json())

// app.get("/", (req, res) => {
//     res.status(200).json({ message: "successfully" })
// })
app.use("/api/user", require("./routes/userRoutes"))
app.use("/api/post", require("./routes/postRoutes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})