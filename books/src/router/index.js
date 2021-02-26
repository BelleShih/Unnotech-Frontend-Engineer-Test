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
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "Books" */ '../views/Books.vue')
  },
  {
    path: '/books/:id',
    name: 'book',
    component: () => import(/* webpackChunkName: "Book" */ '../views/Book.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
