const mongoose = require('mongoose');

const UserForm = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Users' },
    validityDate: {type: Date},
    isDeleted: {
        type: Boolean,
        default: false,
    },
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
},{ 
    timestamps: {
        createdAt: true,
        updatedAt: true,
      },
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
});

module.exports = mongoose.model("UserForm", UserForm);