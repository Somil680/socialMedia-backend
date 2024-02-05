import mongoose from "mongoose"

const Schema = mongoose.Schema
const MessageSchema = new Schema({
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    text: {
        type: String,
    },
},
    {
        timestamps: true
    });
export default mongoose.model("Message", MessageSchema)