const express = require('express');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const hotelRouter = require('./hotel.router');
const imageRouter = require('./image.router');
const reviewRouter = require('./review.router');
const bookingRouter = require('./booking.router');
const router = express.Router();

router.use(userRouter)
router.use(cityRouter)
router.use(hotelRouter)
router.use(imageRouter)
router.use(reviewRouter)
router.use(bookingRouter)


module.exports = router;