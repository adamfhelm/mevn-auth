const { LoginAction } = require("./loginController");
const passwordResetModel = require("../../models/passwordResetModel");
const Bcrypt = require('bcryptjs')

// delete pending password reset request
const deletePasswordResetRequest = (res, token) => {
    console.log("parms to delete req", token)
    PasswordReset.deleteOne({token:token}).then(removedDocument => {
       if(removedDocument) {
        console.log(`this document has been removed`)
        return res.json({
            message: 'Password updated successfully'
        })
       } else {
        console.log('this process was interrupted.')
       }
    })
}

// process password request by changing users password to current password
// request, then delete the request from the database.
// params: password is user clear text password, email, token, and res to pass
// onto the deletePasswordRequestToken after the user's password has been updated.
const processPasswordRequest = function (password, email, token, res) {

    // encrypt the clear text password provided by end user to store in the database.
    const encryptedPass = Bcrypt.hashSync(password)
    
    // mongodb params where user email matches this email.
    const query = { "email": email }

    // mongodb update syntax, set new password to the encrypted password
    const update = {
        "$set": {
            "password": encryptedPass
        }
    }

    // once user password is updated, delete the login request
    // if the request is not present, something happened.
    Login.findOneAndUpdate(query, update).then(updatedDocument => {
        if (updatedDocument) {
            console.log(`Successfully updated document: ${updatedDocument}`)
            // delete pending password requests now that the login model has been updated.
            deletePasswordResetRequest(res, token)
        } else {
            console.log("No document matches the provided query")
            return res.status(422).json({
                username: "No such user,failed to update"
            })
        }
    })
}

// request initiated from client interface

exports.passwordReset = async (req, res) => {

    // username passed in from front end
    const { password, token } = req.body

    // check this is an active pending login request
    const pendingPasswordRequest = await PasswordReset.findOne({ token })

    if (pendingPasswordRequest !== null) {
        // send pending password, token, and user's email to be processed.
        processPasswordRequest(password, pendingPasswordRequest.email, token, res)
    } else {
        return res.status(422).json({
            username: "No login with this email exists"
        })
    }

}


