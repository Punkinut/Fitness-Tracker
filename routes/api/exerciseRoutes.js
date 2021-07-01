// The front-end api file will give you a large hint to what back-end request you will have to do here
const router = require('express').Router();
const db = require('../../models');

// Route to get workouts
router.get('/', async (req, res) => {
    try {
        const workoutData = await db.Workout.find({})
        res.status(200).json(workoutData)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;