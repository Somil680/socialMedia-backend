import { Schema, model } from 'mongoose';

const ChatSchema = new Schema({
    sender: {
        type: String
    },
    receiver: {
        type: String
    },
    message: {
        type: String
    },

}, {
    timestamps: true
});

export default model('Chat', ChatSchema);
