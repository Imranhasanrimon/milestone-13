const verifyAdmin = (req, res, next) => {
    console.log('He is ADMIN');
    next()
}
module.exports = { verifyAdmin }