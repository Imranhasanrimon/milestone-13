const { ObjectId } = require("mongodb");
const getReply = require("../utils/AI/getCommentReply");
const { commentsCollection } = require("../utils/connectDB");

const getAndSetReply = async (req, res) => {
    const { userComment, imagePrompt } = req.body;
    const AIreply = await getReply(userComment, imagePrompt);
    const document = { AIreply, ...req.body }

    const result = await commentsCollection.insertOne(document)
    res.send(document)
}

//getAllComments of an image
const getAllComments = async (req, res) => {

    const { AIImageId } = req.params;
    const result = await commentsCollection.find({ AIImageId }).project({ userEmail: -1, AIImageId: -1, imagePrompt: -1, }).toArray();

    res.send(result)

}

module.exports = { getAndSetReply, getAllComments };