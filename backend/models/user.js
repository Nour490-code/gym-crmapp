import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfSubscription: {
        type: Date,
        default: Date.now
    },
    programs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Program"
        }],
    },{
        timestamps: true
    }
)
module.exports = mongoose.model("User", userSchema)