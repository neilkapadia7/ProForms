const jwt = require('jsonwebtoken')

module.exports = {
    generateToken (id) {
        const token = jwt.sign({id}, process.env.JWT_HASH, { expiresIn: '30d' })
        return token
    }
}