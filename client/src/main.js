import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'



// Generic Components
import Button from '@/components/generic/Button.vue'
import Loader from '@/components/generic/Loader.vue'

// Font Awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)







import authMixin from '@/mixins/auth'


import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.css';


Vue.component('btn', Button)
Vue.component('loader', Loader)


Vue.mixin(authMixin)

Vue.use(SuiVue)
Vue.use(VueFlashMessage, {
  messageOptions: {
      timeout: 2000,
      pauseOnInteract: true
  }
})

Vue.config.productionTip = false

// Aliasing createElement to h is a common
// convention in vue and is required in JSX React.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
