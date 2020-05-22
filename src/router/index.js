import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Meny from '../views/Meny.vue'
import About from '../views/About.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/meny',
    name: 'meny',
    component: Meny
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
