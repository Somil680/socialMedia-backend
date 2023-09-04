import mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true

    },
    password: {
        required: true,
        type: String
    },
    profile_pic: {
        type: String,
        default: ""
    },
    cover_pic: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    likedBy: {
        type: Array,
        default: []
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    }]

},
    {
        timestamps: true
    }
)

export default mongoose.model("User", userSchema)