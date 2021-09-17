const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    password: { type: String },
    mobile: {
      type: String,
      validate: {
        validator: function (mobile) {
        return /^[0-9]*$/.test(mobile);
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    referredBy: { type: String },
    referralCode: { type: String },
    signupType: {type: Number},  // 1 - phone, 2 - email, 3 - linkedin, 4 - google
    userType: {type: Number},
    photo: {type: String},
    isMobileVerified: {type: Boolean},
    isEmailVerified: {type: Boolean},
    token: {type: String}
},{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

module.exports = mongoose.model("Users", Users);