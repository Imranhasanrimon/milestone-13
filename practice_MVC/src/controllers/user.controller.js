const { usersCollection } = require("../utils/connectDB")
const { ObjectId } = require('mongodb');


const getAllUsers = async (req, res) => {
    const result = await usersCollection.find().toArray();
    res.send(result)
}

const getAUser = async (req, res) => {
    const id = req.params.id
    const result = await usersCollection.findOne({ _id: new ObjectId(id) });
    res.send(result)
}

const createUser = async (req, res) => {
    const userInfo = req.body;
    const result = await usersCollection.insertOne(userInfo);
    res.send(result);
}

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const filter = { _id: new ObjectId(userId) }
    const updateInfo = req.body;
    const updatedDoc = {
        $set: updateInfo,
    }
    const result = await usersCollection.updateOne(filter, updatedDoc);
    res.send(result);
}

module.exports = { getAllUsers, getAUser, createUser, updateUser };