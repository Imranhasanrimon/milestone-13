const express = require('express');
const { insertImage, getAllImages, getSingleImage } = require('../controllers/image.controller');
const imageRouter = express.Router();


imageRouter.post('/create', insertImage)
imageRouter.get('/all', getAllImages)
imageRouter.get('/single/:id', getSingleImage)

module.exports = imageRouter;