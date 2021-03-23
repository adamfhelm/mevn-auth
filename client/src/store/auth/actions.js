import axios from 'axios'

const loginActionURL = 'http://localhost:3000/api/login'
const confirmLoginURL = 'http://localhost:3000/api/login/confirm'
const createLoginURL = 'http://localhost:3000/api/login/new/mail'
const forgotPasswordURL = 'http://localhost:3000/api/login/forgot'
const resetPasswordURL = 'http://localhost:3000/api/login/resetPassword'

export const createLogin = 'createLogin'
// export constant to interface with, action is set_auth, will be the 
// type of mutation.  Action will actually be coded in mutations.
export const SET_AUTH = 'SET_AUTH'
export const UNSET_AUTH = 'UNSET_AUTH'
export const POST_LOGIN = 'POST_LOGIN'
export const POST_CONFIRM_LOGIN = 'POST_CONFIRM_LOGIN'
export const POST_RESET_PASSWORD = 'POST_RESET_PASSWORD'
export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'

export default {
     createLogin: async (context, data) =>  await axios.post(createLoginURL, data),
    [POST_CONFIRM_LOGIN]: (context, data) => axios.post(confirmLoginURL, data),
    [POST_LOGIN]: (context, data) => axios.post(loginActionURL, data),
    [POST_FORGOT_PASSWORD]: (context, data) => axios.post(forgotPasswordURL, data),
    [POST_RESET_PASSWORD]: (context, data) => axios.post(resetPasswordURL, data)
}
