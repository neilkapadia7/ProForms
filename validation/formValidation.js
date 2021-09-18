const ValidationRule = require('@service/validation')

module.exports = {
  addForm() {
    return [
      ValidationRule.required('validityDate'),
      ValidationRule.isString('title'),
      ValidationRule.requiredArray('questions'),
      ValidationRule.isBoolean('isPrivate'),
      ValidationRule.isBoolean('isUserAuthorized'),
    ]
  },
  updateForm() {
    return [
      ValidationRule.required('validityDate'),
      ValidationRule.isString('title'),
      ValidationRule.requiredArray('questions'),
      ValidationRule.isBoolean('isPrivate'),
      ValidationRule.isBoolean('isUserAuthorized'),
    ]
  },
  OTPLogin() {
    return [
      ValidationRule.isEmail('email'),
      ValidationRule.isNumber('otps'),
    ]
  },

  submitForm() {
    return [
      ValidationRule.requiredObjectId('formId'),
      ValidationRule.requiredArray('answers'),
      ValidationRule.isNumber('noOfAnswers'),
      ValidationRule.isNumber('noOfQuestions'),
    ]
  },
}