const mongoose = require("mongoose");

const userModel = mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true},
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestaps: true }
)
const User = mongoose.Model("User", userModel)
module.exports = User 