import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        typr: String,
        required: true
    },

    email: {
        typr: String,
        required: true,
        unique: true
    },

    password: {
        typr: String,
        required: true
    },

    cartItem: {
        typr: Object,
        default: {}
    },
}, {minimize: false})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;