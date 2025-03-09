const { reviewsCollection } = require("../utils/connectDB");

const getAllReviews = async (req, res) => {
    const result = await reviewsCollection.find().toArray();
    res.send(result)
}

const addReview = async (req, res) => {
    const reviewInfo = req.body;
    const result = await reviewsCollection.insertOne(reviewInfo);
    res.send(result);
}


module.exports = { getAllReviews, addReview };