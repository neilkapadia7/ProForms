const Users = require('@models/Users')
const FormAnswers = require('@models/FormAnswers')
const Forms = require('@models/Forms')
const Responder = require('@service/response')

module.exports = {
    // api/forms/user/submit
    // api/forms/user/submit-unauth
    async submitForm (req, res) {
        try {
            let form = await Forms.findOne({_id: req.body.formId});
            if(!form)
                return Responder.respondWithNotFound(req, res, 'Form not found') 

            const newForm = await new FormAnswers(
                {
                    ...req.body, 
                    submittedOn: new Date(),
                    isGuestUser: req.user && req.user.id ? true : false,
                    ...(req.user && req.user.id && {userId: req.user.id}),
                }).save()
            
            form.noOfSubmittedUser++
            await form.save()

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
            let forms = await Forms.findOne({_id: req.params.id})
            if(!forms)
                return Responder.respondWithCustomError(req, res, 'Invalid Form ID')

            forms.noTimesFetched++
            await forms.save()
            
            return Responder.respondWithSuccess(req, res, newForm, 'Form Fetched Successfully');
        }
        catch (err) {
            console.log(err);
            return Responder.respondWithError(req,res, err)
        }
    },
}