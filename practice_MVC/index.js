const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ message: "MVC practice project home route" })
})

app.listen(port, () => {
    console.log("MVC practicing on port : ", port);
})