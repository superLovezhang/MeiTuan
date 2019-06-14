import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './Home';
import Mine from './Mine';
import Login from './Login';
import Address from './Address'
import Retrieve from './Retrieve';
import Register from './Register';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home/Search',
      component: () => import('@/views/Search.vue')
    },
    Home,
    Mine,,
    Login,
    Address,
    Retrieve,
    Register
  ]
})
