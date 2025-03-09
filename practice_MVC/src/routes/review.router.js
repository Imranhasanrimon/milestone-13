const express = require('express');
const { getAllReviews, addReview } = require('../controllers/review.controller');
const reviewRouter = express.Router();

reviewRouter.get('/all-reviews', getAllReviews)
reviewRouter.post('/add-review', addReview)


module.exports = { reviewRouter };