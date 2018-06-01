import Vue from 'vue'
import Router from 'vue-router'

import player from "../player/player.vue"
import my from "../player/songbrowser/my/my.vue"
import login from '../Login/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/player',
      component:player,
      children:[
        {
          path:'/player/my',
          component:my
        }
        

      ]
    },
    {
      path:'/login',
      component:login

    }
  ]
})
