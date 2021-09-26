const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    followersCount: {type: Number},
    followingCount: {type: Number},
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
    followings: [{type: mongoose.Schema.Types.ObjectId, ref: 'Users'}],
},{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Follows = mongoose.model('Follows', followSchema);

module.exports = Follows;