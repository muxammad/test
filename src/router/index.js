import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
}, {
  path: '/profile',
  name: 'Profile',
  component: () => import('../views/Profile.vue')
}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login.vue')
}];

const router = new VueRouter({
  routes
})

export default router
