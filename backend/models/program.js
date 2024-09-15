import mongoose from "mongoose";
import workoutSchema from "./workout.js";
const programSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    workouts:{
        type: [workoutSchema],
        required: true
    }
})

module.exports = mongoose.model("Program", programSchema)