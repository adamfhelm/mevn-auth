const Yup = require('yup')

const RegisterSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(4).required()
})

exports.RegisterSchema = async (req, res, next) => {
    const { username, password } = req.body

    try {
        console.log("username, password", username, password)
        // try to register user according to rules
        await RegisterSchema.validate({ username, password })

        // be sure login doesn't exist
        const existingLoginRequest = await LoginConfirm.findOne({username})
        const existingLogin = await Login.findOne({username})
        // if login request exists throw error.
        if(existingLoginRequest) {
            throw new Yup.ValidationError(
               
                'This login request already exists please check your inbox.',
                req.body,
                'username'
            )
        }
        // if login exists at all throw error.
        if(existingLogin) {
            throw new Yup.ValidationError(
               
                'This login already exists please use the forgot link to update your password.',
                req.body,
                'username'
            )
        }

    } catch (error) {
        return res.status(422).json({
            [error.path]: error.message
        })
    }
    next()
}

