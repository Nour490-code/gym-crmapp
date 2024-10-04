import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { SECRET_ACCESS_TOKEN } from '../config/env.js';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
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

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.generateAuthToken = function () {
    const user = this;
    return jwt.sign({ _id: user._id }, SECRET_ACCESS_TOKEN, {
        expiresIn: "30d",
    });
}


export default mongoose.model("users", userSchema)