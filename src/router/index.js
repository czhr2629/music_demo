import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Mine from '../views/mine'
import Search from '../views/search'
import Topic from '../views/bangdan'

import Layout from '../views/layout'
import Player from "../views/Player"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',//高亮
  routes:[
    {
      path: '/player/:songid',
      name: 'Player',
      component: Player,
      props:true
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'topic',
          name: 'Topic',
          component: Topic
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
      ]
    },
  ]
})

export default router
