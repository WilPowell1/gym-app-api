const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExerciseSchema = new Schema({
	exercise: String,
    musclesWorked: String,
    description: String,
});

const Exercise = mongoose.model('exercise', ExerciseSchema);

model.exports = Exercise;