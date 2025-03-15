const jwt = require('jsonwebtoken')
const makeToken = async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, "secret", { expiresIn: '1h' });
    res.send(token)
}

module.exports = { makeToken }