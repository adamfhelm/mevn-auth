// Initialize New Login to Confirm

exports.initializeLoginAndSendMail = (req, res) => {

    const newLoginToConfirm = new LoginConfirm(req.body);
    newLoginToConfirm.email = req.body.username;
    newLoginToConfirm.username = req.body.username;
    newLoginToConfirm.password = req.body.password;
    newLoginToConfirm.token = newLoginToConfirm.generateToken()
    newLoginToConfirm.save((err, login) => {
        if (err) res.send(err);
        res.json({ message: 'Login Initialized', login: login });
        //console.log(`Login Added: ${login.username} Added`);
    });
};