import mongoose from "mongoose"

const Schema = mongoose.Schema
const commentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: String,
    profile_pic: String,
    content: {
        type: String,
        required: true
    },
    // Add any other fields you may need for comments
},
    {
        timestamps: true
    });
export default mongoose.model("comment", commentSchema)