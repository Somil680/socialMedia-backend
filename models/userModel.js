import mongoose from "mongoose"
import postSchema from "./postsModal"; // Import the postSchema from the separate file

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    first_name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    heading: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    date_of_birth: {
        type: Date,
        default: null
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
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
    bookmark: {
        type: Array,
        default: []
    },
    // bookmark: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "Post"
    // }],
    is_admin: {
        type: Boolean,
        default: false
    },
    posts: [Schema.Types.Mixed]


},
    {
        timestamps: true
    }
)

export default mongoose.model("User", userSchema)