// The seed file will give you a big hint to how the models should be formatted
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
            },
            name: {
                type: String,
                trim: true,
            },
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number,
        },
    ],
    totalDuration: {
        type: Number,
        default: 0,
    }
})

const Workout = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workout;