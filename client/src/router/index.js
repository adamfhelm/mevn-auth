import Vue from 'vue';
import Router from 'vue-router';

import routes from '@/router/routes/index.js'

Vue.use(Router);

const router = new Router({
  mode: 'history',  
  base: process.env.BASE_URL,  
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/authentication'
    }
  ].concat(routes)
})

export default router
