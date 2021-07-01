// The front-end api file will give you a large hint to what back-end request you will have to do here
const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
})

module.exports = router;