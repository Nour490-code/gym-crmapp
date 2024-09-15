import mongoose from "mongoose";
const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    set:{
        type: Number,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    video:{
        title:{
            type: String,
            required: true
        },
        url:{
            type: String,
            required: true
        }
    }
    
})

module.exports = mongoose.model("Workout", workoutSchema)