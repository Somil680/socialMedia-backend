import mongoose from "mongoose"

const Schema = mongoose.Schema
const commentSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: String,
    // profile_pic: String,
    content: {
        type: String,
        required: true
    },
    // Add any other fields you may need for comments
},
    {
        timestamps: true
    });
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
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    // like: [Schema.Types.Mixed],
    like: {
        type: Array,
        default: []
    },
    comments: [commentSchema],
    username: Schema.Types.Mixed,
    profile_pic: Schema.Types.Mixed,
},
    {
        timestamps: true
    })
export default mongoose.model("Post", postSchema)