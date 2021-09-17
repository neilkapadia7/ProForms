const User = require('@models/Users')
const Responder = require('@service/response')
const Token = require('@service/token')
// import asyncHandler from 'express-async-handler'; 
// import {generateToken} from '../util/generateToken.js';
// import {sendRefreshToken} from '../auth/sendRefreshToken.js';
// import {createAcessToken, createRefreshToken} from '../auth/createToken.js'

/**
    @route POST api/user/signup
    @description Register User
*/ 
module.exports = {
    async signUp(req, res) {
        try {
            const {name, email, phone, password} = req.body;
            const checkUser = await User.findOne({email});
            if(checkUser) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'User Already Exists');

            const user = new User({
                name,
                email,
                phone,
                password
            });

            let token = Token.generateToken(user._id);
            user.token = token;
            await user.save()
            
            return Responder.respondWithSuccess(req, res, {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                token,
            }, 'Successful')    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route POST api/user/login
    @description Login User
*/ 
    async login (req, res) {    
        try {
            const checkUser = await User.findOne({email: req.body.email});
            if(!checkUser)                 
                return Responder.respondWithFalseSuccess(req, res, {}, "User Doesn't Exist");

            let checkPassword = await checkUser.matchPassword(req.body.password)
            if(!checkPassword)
                return Responder.respondWithUnauthorised(req, res, "Invalid Password");
        
            let token = Token.generateToken(checkUser._id);
            checkUser.token = token;
            await checkUser.save()
                
            return Responder.respondWithSuccess(req, res, {
                _id: checkUser._id,
                name: checkUser.name,
                email: checkUser.email,
                phone: checkUser.phone,
                token,
            }, 'Successfully Logged In')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    }

}
/**
    @route GET api/users/profile
    @description Get user details
*/ 
// export const getUserProfile = async (req, res) => {
//     res.json({
//         _id: req.user._id,
//         id: req.user.id,
//         name: req.user.name,
//         email: req.user.email,
//         picture: req.user.picture
//     })
// };

// /**
//     @route PUT api/users/profile
//     @description Update User Details
//     @access Private
// */ 
// export const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if(user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         if(req.body.password) {
//             user.password = req.body.password
//         }

//         await user.save()

//         res.json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//             isAdmin: user.isAdmin,
//             token: generateToken(user._id)
//         })
//     }
//     else {
//         res.status(404);
//         throw new Error('User not found');
//     }
// });