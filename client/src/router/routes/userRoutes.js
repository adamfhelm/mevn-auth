
import Authentication from '@/views/authentication/Authentication.vue'
import AuthenticationSignup from '@/views/authentication/AuthenticationSignup.vue'
import AuthenticationSignupConfirmation from '@/views/authentication/AuthenticationSignupConfirmation.vue'
import AuthenticationForgot from '@/views/authentication/AuthenticationForgot.vue'
import AuthenticationResetPassword from '@/views/authentication/AuthenticationResetPassword.vue'
import AuthenticationSignupConfirmationMessageSent from '@/views/authentication/AuthenticationSignupConfirmationMessageSent.vue'


const routes = [
  {
    path: '/authentication/signup/confirm-message-sent',
    name: 'authSignupConfirmMessage',
    component: AuthenticationSignupConfirmationMessageSent
  },
  {
    path: '/authentication/signup/confirm/:emailConfirmToken',
    name: 'authSignupConfirmation',
    component: AuthenticationSignupConfirmation
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: Authentication
  },
  {
    path: '/authentication/signup',
    name: 'authSignup',
    component: AuthenticationSignup
  },
  {
    path: '/authentication/forgot',
    name: 'authForgot',
    component: AuthenticationForgot
  },
  {
    path: '/authentication/forgot/:token',
    name: 'authResetPassword',
    component: AuthenticationResetPassword
  }
]

export default routes