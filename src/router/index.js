import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ux-design',
    name: 'UX Design',
    component: () => import('../views/UXDesign.vue')
  },
  {
    path: '/how-it-works',
    name: 'How It Works',
    component: () => import('../views/HowItWorks.vue')
  },
  {
    path: '/our-mission',
    name: 'Our Mission',
    component: () => import('../views/Mission.vue')
  },
  {
    path: '/contact',
    name: 'Contack Us',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/account/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
