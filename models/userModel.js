import mongoose from "mongoose"
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        required: true,
        type: 'string',
    },
    email: {
        required: true,
        type: 'string',
        unique: true

    },
    password: {
        required: true,
        type: 'string'
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