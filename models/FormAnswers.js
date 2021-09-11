const mongoose = require('mongoose');

const FormAnswers = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'UserForm' },
    submittedOn: {type: Date},
    answers: [
        {
            questionType: {
                type: String,
                enum: ["textfield", "checkbox", "radiobutton"]
            }, 
            question: {type: String},
            answer: {type: String}, 
        }
    ],
    noOfAnswers: {type: Number},
    noOfQuestions: {type: Number},
},{ 
    timestamps: {
        createdAt: true,
        updatedAt: true,
      },
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
});

module.exports = mongoose.model("FormAnswers", FormAnswers);