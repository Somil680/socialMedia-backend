const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: File
    }
},
    {
        timestamps: true
    })
module.exports = mongoose.modal("post.Post", userSchema)