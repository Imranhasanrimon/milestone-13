require('dotenv').config()
const app = require('./src/app');
const { connectDB } = require('./src/utils/connectDB');
const port = process.env.PORT || 5000;


connectDB().then(() => {
    app.listen(port, () => {
        console.log('server is running on port', port);
        console.log('MongoDB connected');
    })
}).catch((err) => {
    console.log(err);
})

