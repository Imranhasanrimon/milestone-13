//definitions
const express = require('express');
const { verifyToken } = require('./middlewares/verifyToken');
const userRouter = require('./routes/user.router');
const { reviewRouter } = require('./routes/review.router');
const { jwtRouter } = require('./routes/jwt.router');
const app = express();


//middleware
app.use(express.json())
app.use(verifyToken)


//routes
app.use('/practice/users', userRouter);
app.use('/practice/reviews', reviewRouter)
app.use('/practice/jwt', jwtRouter)

//playgrounds


//

app.get('/', (req, res) => {
    res.send({ message: "MVC practice project home route" })
})

module.exports = app;