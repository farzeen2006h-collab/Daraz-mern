import mongoose, { model } from "mongoose";

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
    },

    role: {
        type: String,
        enum: ["customer", "seller", "admin"],
        default: "customer"
    },

}, {
    timestamps: true
});

export default model("User", userSchema);