const ValidationRule = require('@service/validation')

module.exports = {
  signUp() {
    return [
      ValidationRule.isString('name'),
      ValidationRule.isEmail('email'),
      ValidationRule.isNumber('phone'),
      ValidationRule.isString('password'),
    ]
  },
  login() {
    return [
      ValidationRule.isEmail('email'),
      ValidationRule.isString('password'),
    ]
  },
  OTPLogin() {
    return [
      ValidationRule.isEmail('email'),
      ValidationRule.isNumber('otps'),
    ]
  },
}