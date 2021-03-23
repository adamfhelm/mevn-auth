//instantiate LoginSchema to allow access to methods
const LoginSchema = new Login();

// Called by LoginAction when user attempts to log in,
// we populate a login object to reference
const getLogin = (req, res) => {
    return Login.findOne({ username: req.body.username }, (err) => {
        if (err) res.send(err);
    });
}; 

// if the user exists check that the clear text passwords provided
// by the end user matches the encrypted password stored in the database 
// if it does assign token.

exports.LoginAction = async (req, res) => {
    
    const username = req.body.username
    const plainPassword = req.body.password
    // get user login object back from the database, if it exists
    const loginObject = await getLogin(req, res);
   
     // if the user exists
    if (loginObject !== null) {
        const encryptedPassword = loginObject.password
        // check if password is correct and return username and token
        // to client
        if (LoginSchema.passComp(plainPassword, encryptedPassword)) {
            const token = LoginSchema.generateToken()
            return res.json({
                username,
                token
            })
        // return password incorrect message to client
        } else {
            return res.status(400).json({
                password: "This password is incorrect"
            })
        }
    }

    // if nothing returned from the database return message that the user
    // does not exist
    if (loginObject === null) {
        return res.status(400).json({
            username: 'This user does not exist'
        })
    }

}

// create new login login

exports.createLogin = (req, res) => {

    const newLogin = new Login(req.body);
    newLogin.email = req.body.username;
    newLogin.save((err, login) => {
        const token = newLogin.generateToken()
        if (err) res.send(err);
        res.json({ message: 'Login Added', login: login, token: token });
        //console.log(`Login Added: ${login.username} Added`);
    });
};