const { LoginAction } = require("./loginController");
const LoginConfirm = require("../../models/loginConfirmModel");

// create new login document with username and password initiated in new login and confirmed
// in the sent e-mail.
const processNewLoginRequest = (param, res) => {
    const loginBody = {
        email: param.username,
        username: param.username,
        password: param.password,
        createdAt: param.createdAt,
        token: param.token
    }
    const newLogin = new Login(loginBody);
    newLogin.save((err, login) => {
        const token = loginBody.token;
        if (err) res.send(err);
        //console.log(`Login Added: ${login.username} Added`);
        // success = delete pending login confirmation request
        LoginConfirm.deleteOne({token:token}).then(removedDocument => {
            if(removedDocument) {
             console.log(`this document has been removed`)
             return res.json({
                 message: 'Login Successfully Created'
             })
            } else {
             console.log('this process was interrupted.')
            }
         })
    });
    
}

// request initiated from client interface

exports.confirmLogin = async (req, res) => {

    
    const emailConfirmToken = req.body.emailConfirmToken;
    
     // check this is an active pending login request
    const pendingLoginRequest = await LoginConfirm.findOne({ emailConfirmCode: emailConfirmToken })
    
    // if login is pending continue to process
    if (pendingLoginRequest !== null) {
        processNewLoginRequest(pendingLoginRequest, res);
    } else {
        return res.status(422).json({
            username: "No login with this email exists"
        })
    }

}


