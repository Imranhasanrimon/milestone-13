const verifyToken = (req, res, next) => {
    console.log(`Verified User`);
    next()
}

module.exports = verifyToken;