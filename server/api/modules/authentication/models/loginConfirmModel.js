// used to confirm new login before adding it to MongoDB.

const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
const randomstring = require("randomstring");
const Mail = require("@fullstackjs/mail");

const LoginConfirmSchema = new Schema({
  username: String,
  email: String,
  emailConfirmCode: String,
  password: String,
  token: String,
  createdAt: Date,
});

// pre save hook to hash password
LoginConfirmSchema.pre("save", function () {
  this.password = Bcrypt.hashSync(this.password);
  this.emailConfirmCode = randomstring.generate(72);
  this.createdAt = new Date();
});

// after login is initialized send an email for confimation using
// post save hook.
LoginConfirmSchema.post("save", async function () {
  await new Mail("confirm-account")
    .to(this.email)
    .subject("Please confirm your account")
    .data({
      name: this.username,
      url: `${process.env.CLIENT_ENV}/authentication/signup/confirm/${this.emailConfirmCode}`,
    })
    .send();
});

// instance method to use jwt to generate a token
// in this case we're using the sign method of jwt, which takes in
// the user's id and a secret to sign the token.
LoginConfirmSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("LoginConfirm", LoginConfirmSchema);
