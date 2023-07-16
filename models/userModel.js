const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

},
    {
        timestamps: true
    })
module.exports = mongoose.modal("User", userSchema)