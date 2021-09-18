const jwt = require('jsonwebtoken');
const User = require('@models/Users');
const Responder = require('@service/response')

module.exports = async (req, res, next) => {
    try {
        if(!req.headers['authorization'])
            return Responder.respondWithUnauthorised(req, res, "Unauthorized")
        const bearerToken = req.headers['authorization'].split(' ')[1]
        if(!bearerToken) 
            return Responder.respondWithUnauthorised(req, res, "Unauthorized")
        
        const decodedId = jwt.verify(bearerToken, process.env.JWT_HASH)
        const user = await User.findOne({_id: decodedId.id}).select('-token -password')
        if(!user)
            return Responder.respondWithUnauthorised(req, res, "Unauthorized")

        req.user = decodedId
        next()
    }
    catch (err) {
        return Responder.respondWithUnauthorised(req, res, "Invalid Token")
    }
}