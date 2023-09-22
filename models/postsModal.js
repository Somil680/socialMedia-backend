import mongoose from "mongoose"

const Schema = mongoose.Schema
const postSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
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
export default mongoose.model("Post", postSchema)