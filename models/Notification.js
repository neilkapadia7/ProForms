const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    content: {type: String},
    actionUrl: {type: String},
    isActive: {type: Boolean, default: true},
},{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Notifications = mongoose.model('Notifications', notificationSchema);

module.exports = Notifications;