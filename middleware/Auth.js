const jwt = require('jsonwebtoken');
const User = require('@models/Users');

module.exports = async (req, res, next) => {
    try {
        if(!req.headers['authorization'])
            return respondWithUnauthorised(req, res, "Unauthorized")
        const bearerToken = req.headers['authorization'].split(' ')[1]
        if(!bearerToken) 
            return respondWithUnauthorised(req, res, "Unauthorized")
        
        const decodedId = jwt.verify(bearerToken, process.env.JWT_HASH)
        const user = await User.findOne({_id: decodedId.id}).select('-token -password')
        if(!user)
            return respondWithUnauthorised(req, res, "Unauthorized")

        req.user = decodedId
        console.log(req.user)
        next()
    }
    catch (err) {
        return respondWithUnauthorised(req, res, "Invalid Token")
    }
}