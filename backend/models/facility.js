import mongoose from "mongoose";

const facilitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    }
    })