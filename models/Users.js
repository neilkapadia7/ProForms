const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String },
    phone: {
      type: String,
      validate: {
        validator: function (phone) {
        return /^[0-9]*$/.test(phone);
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    otps: {type: Number},
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

userSchema.methods.matchPassword = async function(enteredPassword) {
  console.log(enteredPassword, this.password)
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function(next) {
  if(!this.isModified('password')) {
      next()
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;