const mongoose = require('mongoose');

const UserForm = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
    validityDate: {type: Date},
    isDeleted: {
        type: Boolean,
        default: false,
    },
    title: {type: String},
    questions: [
        {
            questionType: {
                type: String,
                enum: ["textfield", "checkbox", "radiobutton"]
            }, 
            content: {type: String}, 
            isRequired: {type: Boolean},
        }
    ],
    noOfQuestion: {type: Number},
    noOfSubmittedUser: {type: Number},
    isPrivate: {type: Boolean, defaut: false},
    isUserAuthorized: {type: Boolean, default: false},
    noTimesFetched: {type: Number, default: 0},
},{ 
    timestamps: {
        createdAt: true,
        updatedAt: true,
      },
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
});

module.exports = mongoose.model("UserForm", UserForm);