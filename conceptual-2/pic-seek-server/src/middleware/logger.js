const logger = (req, res, next) => {
    console.log(`Login Successful`);
    next()
}

module.exports = logger;