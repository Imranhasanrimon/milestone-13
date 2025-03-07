const { ObjectId } = require("mongodb");
const generateImageUrl = require("../utils/AI/generateImageUrl");
const getImageBuffer = require("../utils/AI/getImageBuffer");
const { imagesCollection } = require("../utils/connectDB");

const insertImage = async (req, res) => {
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

}

const getAllImages = async (req, res) => {
    try {
        const result = await imagesCollection.find().project({ _id: 1, imgByAI: 1, prompt: 1 }).toArray();
        res.send(result)
    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

const getSingleImage = async (req, res) => {
    try {
        const { id } = req.params;

        if (id.length < 24) {
            res.status(500).send({ error: "please provide valid _id" });
            return;
        }

        const result = await imagesCollection.findOne({ _id: new ObjectId(id) });

        if (result) {
            res.send(result)
            return;
        } else {
            res.send({ message: `couldn't find with this id: ${id}` });
            return;
        }

    } catch (err) {
        console.log(err);
        res.status(500).send(err)
    }
}

module.exports = { insertImage, getAllImages, getSingleImage };