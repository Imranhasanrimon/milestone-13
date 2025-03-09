const express = require('express');
const app = require('./src/app');
const { connectDB } = require('./src/utils/connectDB');
const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log("MVC practicing on port : ", port);
        console.log('DB is connected');
    })
}).catch((err) => {
    console.log(err);
})
