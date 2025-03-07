require('dotenv').config() //maybe required in multiple files
const { MongoClient, ServerApiVersion } = require('mongodb');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db(process.env.DB_NAME);
const imagesCollection = db.collection('images');
const commentsCollection = db.collection('comments');

async function connectDB() {
    return client.connect()
}



module.exports = { connectDB, imagesCollection, commentsCollection };