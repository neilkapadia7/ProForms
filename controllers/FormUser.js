const Users = require('@models/Users')
const FormAnswers = require('@models/FormAnswers')
const Responder = require('@service/response')

module.exports = {
    // api/forms/user/submit
    // api/forms/user/submit-unauth
    async submitForm (req, res) {
        try {
            const newForm = await new FormAnswers(
                {
                    ...req.body, 
                    submittedOn: new Date(),
                    isGuestUser: req.user && req.user.id ? true : false,
                    ...(req.user && req.user.id && {userId: req.user.id}),
                }).save()
            return Responder.respondWithSuccess(req, res, newForm, 'Successfully Submitted Form');
        }
        catch (err) {
            console.log(err);
            return Responder.respondWithError(req,res, err)
        }
    }, 

    // api/forms/user/form/:id
    async getForm (req, res) {
        try {
            const {isUserAuthorized, isPrivate, questions, title, validityDate} = req.body;
            let forms = await FormAnswers.findOne({_id: req.params.id})
            if(!forms)
                return Responder.respondWithCustomError(req, res, 'Invalid ID')

            forms.isUserAuthorized = isUserAuthorized
            forms.isPrivate = isPrivate
            forms.questions = questions
            forms.title = title
            forms.validityDate = validityDate
            await forms.save()
            
            return Responder.respondWithSuccess(req, res, newForm, 'Successfully Updated Form');
        }
        catch (err) {
            console.log(err);
            return Responder.respondWithError(req,res, err)
        }
    },
}