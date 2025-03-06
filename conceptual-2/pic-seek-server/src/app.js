//definition
require('dotenv').config() //maybe required in multiple files
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const verifyToken = require('./middleware/verifyToken');
const getImageBuffer = require('./utils/AI/getImageBuffer');
const generateImageUrl = require('./utils/AI/generateImageUrl');
const { imagesCollection } = require('./utils/connectDB');
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(logger)
app.use(verifyToken)


//playground
app.post('/create-image', async (req, res) => {
    const { email, prompt, userName, userImg, category } = req.body;

    if (!email || !prompt || !userName || !userImg || !category) {
        res.status(400).send({
            status: 400,
            message: "please provide email, prompt, userName, userImg, category "
        })
        return;
    }

    try {
        //1+2. create final prompt & generate image buffer
        const buffer = await getImageBuffer(prompt, category);
        //3. upload image & get url
        const url = await generateImageUrl(buffer);
        //4. save in DB
        const document = {
            email,
            prompt,
            userName,
            userImg,
            category,
            imgByAI: url
        }
        const result = await imagesCollection.insertOne(document)

        //5. send response to clientSide

        res.send({ ...result, url: url })
    } catch (err) {
        console.log(err);
        res.send({ error: err })
    }

})





//


app.get('/', (req, res) => {
    res.send({ message: 'This is the default API endpoint' })
})


module.exports = app;