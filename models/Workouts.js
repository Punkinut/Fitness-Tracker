// The seed file will give you a big hint to how the models should be formatted
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;