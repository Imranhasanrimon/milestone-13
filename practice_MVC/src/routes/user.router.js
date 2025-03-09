const express = require('express');
const { getAllUsers, getAUser, createUser, updateUser } = require('../controllers/user.controller');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const userRouter = express.Router();

userRouter.get('/allUsers', getAllUsers)
userRouter.get('/aUser/:id', verifyAdmin, getAUser)
userRouter.post('/create', createUser)
userRouter.patch('/update/:id', updateUser)

module.exports = userRouter;