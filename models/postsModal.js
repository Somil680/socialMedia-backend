import mongoose from "mongoose"

const Schema = mongoose.Schema
const userSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
},
    {
        timestamps: true
    })
export default mongoose.model("Post", userSchema)