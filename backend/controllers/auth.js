import User from "../models/User.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        const newUser = new User({
            name,
            email,
            password,
        });
        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "It seems you already have an account, please log in instead.",
            });
        const savedUser = await newUser.save(); 
        const { role, ...user_data } = savedUser._doc;
        res.status(200).json({
            status: "success",
            data: [user_data],
            message:
                "Thank you for registering with us. Your account has been successfully created.",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}


export async function login(req, res) {
    const { email } = req.body;
    try {
        const existingUser = await User.findOne({ email }).select("+password");
        if (!existingUser)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "Invalid credentials",
            });
        const isPasswordCorrect = await bcrypt.compare(
            `${req.body.password}`,
            existingUser.password
        );
        if (!isPasswordCorrect)
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "Invalid credentials",
            });
        const { password, ...user_data } = existingUser._doc;
        res.status(200).json({
            status: "success",
            data: [user_data],
            message: "Login successful",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: err.message,
        });
    }
    res.end();
}   