const express = require('express');
const { insertImage, getAllImages } = require('../controllers/image.controller');
const imageRouter = express.Router();


imageRouter.post('/create', insertImage)
imageRouter.get('/all', getAllImages)

module.exports = imageRouter;