const mongoose = require('mongoose')
const { Schema } = mongoose;


const PasswordResetSchema = new Schema({
    
    email: String,
    token: String,
    createdAt: Date
}) 

module.exports = mongoose.model('PasswordReset', PasswordResetSchema);