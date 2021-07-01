const router = require('express').Router();

const backRoutes = require('./api');

router.use('/', backRoutes);

module.exports = router;