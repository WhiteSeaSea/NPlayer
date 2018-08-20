import Vue from 'vue'
import Router from 'vue-router'

import player from "../player/player.vue"
import my from "../player/songbrowser/my/my.vue"
import find from "../player/songbrowser/find/find.vue"
import recommand from "../player/songbrowser/find/recommand/recommand.vue"
import rank from "../player/songbrowser/find/rank/rank.vue"
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
        },
        {
          path:'/player/find',
          component:find,
          children:[
            {
              path:'/player/find/recommand',
              component:recommand
            },
            {
              path:'/player/find/rank',
              component:rank
            }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:login

    }
  ]
})
