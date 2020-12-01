import Vue from 'vue'
import Router from 'vue-router'
import Content from './views/Content.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'content',
      component: Content
    }
  ]
})
