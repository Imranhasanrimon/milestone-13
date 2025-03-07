const express = require('express');
const { getAndSetReply, getAllComments } = require('../controllers/comment.controller');
const commentRouter = express.Router();

commentRouter.post("/reply", getAndSetReply);
commentRouter.get("/all-comments/:AIImageId", getAllComments);

module.exports = commentRouter;