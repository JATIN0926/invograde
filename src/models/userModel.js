import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password_hash: {
        type: String,
        required: [true, "Please provide a password"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    profilePicture: {
        type: String,
    },
    bio: {
        type: String,
    },
    profile_title: {
        type: String,
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    isVerified: {
        type: Boolean,
        default: false,
    },
    receiveUpdates: Boolean,
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});


const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;