const { LoginAction } = require("./loginController");
const passwordResetModel = require("../../models/passwordResetModel");

// if this is a new request process it for the first time and 
// send new link, otherwise let the end user know there's already a pending
// request.
const validateAndProcessRequest = async function(user, newReq, res) {
    //if there's no e-mail that's already been generated for the reset
    if(newReq == null) {
    
    // call the Login.forgotPassword method
    await user.forgotPassword()
     // send along the message
     return res.json({
        message: 'Password reset link sent.'
    })
    // A prior request is pending
    } else {
        return res.status(422).json({
            username: "Password reset link already sent"
        })
     }
}

// request initiated from client interface

exports.passwordForgot = async (req, res) => {

    // username passed in from front end
    const { username } = req.body
    
    // get user from database if it exists 
    // check to see if there is already a pending request
    // send it to be validated
    const user = await Login.findOne( { username } )
 

    if(user !== null ) {
    
    // if this is a valid email user, check if a request has been sent
    // either this request is new(null), or has already been requested.
     const requestToValidate = await PasswordReset.findOne({email:user.username})    
    
        
     // apply rules and send instructions to end user
    validateAndProcessRequest(user, requestToValidate, res)
    
 } else {
     return res.status(422).json({
         username: "No login with this email exists"
     })
 }
}; 


