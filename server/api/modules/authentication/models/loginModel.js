const mongoose = require('mongoose')
const { Schema } = mongoose;

const Bcrypt = require ('bcryptjs')
const randomstring = require ('randomstring')
const jwt = require('jsonwebtoken')
const Mail = require('@fullstackjs/mail')
const PasswordReset = require('../models/passwordResetModel')

const LoginSchema = new Schema({
    username: String,
    email: String,
    token: String,
    createdAt: Date,
    updatedAt: Date,
    password: String,
    emailConfirmedAt: Date,
    emailConfirmCode: String
}) 

// // pre save hook to hash password
// LoginSchema.pre('save', function() {
//     this.password = Bcrypt.hashSync(this.password)
//     this.emailConfirmCode = randomstring.generate(72)
//     this.createdAt = new Date()
// })

// after user is saved send an email for confimation using
// post save hook.  
// LoginSchema.post('save', async function() {
//     await new Mail('confirm-account')
//     .to(this.email, this.name)
//     .subject('Please confirm your account')
//     .data({
//         name: this.username,
//         url: `${process.env.CLIENT_ENV}/authentication/signup/confirm/${this.emailConfirmCode}`
//     })
//     .send()
// })

// instance method to use jwt to generate a token
// in this case we're using the sign method of jwt, which takes in
// the user's id and a secret to sign the token.
LoginSchema.methods.generateToken = function() {
   return jwt.sign({id: this._id}, process.env.JWT_SECRET)
}

// compare plain text password and encrypted password
LoginSchema.methods.passComp = function(plainPassword, encryptedPassword) {
    if(Bcrypt.compareSync(plainPassword, encryptedPassword)) {
        return true
    } else {
        return false
    }
}
// forgot password, generate random string
LoginSchema.methods.forgotPassword = async function() {
    
    const token = randomstring.generate(72)
   
 // populate the password reset model
    await PasswordReset.create ({
        token,
        email: this.email,
        createdAt: new Date()
    })
    // npx friendlymail generate forgot-password
    await new Mail('forgot-password')
    .to(this.email)
    .subject('Password reset')
    .data({
        url: `${process.env.CLIENT_ENV}/authentication/forgot/${token}`,
        name: ''
    })
    .send()
}

module.exports = mongoose.model('Login', LoginSchema);