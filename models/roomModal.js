import mongoose from "mongoose"

const Schema = mongoose.Schema
const RoomSchema = new Schema({
    roomName: {
        type: String,
        trim: true,
    },
    isGroupRoom: {
        type: Boolean,
        default: false,
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }

}, {
    timestamps: true
});

export default mongoose.model('Room', RoomSchema);
