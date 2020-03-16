const express = require('express');
const router = express.Router();


// /api/cars
router.use('/cars', require('./api/carRoutes'));
// /api/user
// router.use('/user', require('./api/userRoutes'));


module.exports = router;