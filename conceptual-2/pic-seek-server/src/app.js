//definition
require('dotenv').config() //maybe required in multiple files
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const verifyToken = require('./middleware/verifyToken');
const imageRouter = require('./routes/image.route');
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(logger)
app.use(verifyToken)

//routers
app.use('/api/v1/image', imageRouter)
app.get('/api/v1/image', imageRouter)

//playground






//


app.get('/', (req, res) => {
    res.send({ message: 'This is the default API endpoint' })
})


module.exports = app;