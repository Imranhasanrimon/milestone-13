const verifyToken = (req, res, next) => {
    console.log('user is verified');
    next();
}

module.exports = { verifyToken };