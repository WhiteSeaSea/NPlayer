import Vue from 'vue'
import Router from 'vue-router'

import player from "../player/player.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/player'
    },
    {
      path:'/player',
      component:player
    }
  ]
})
