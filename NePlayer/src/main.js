// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(solid);
Vue.component('font-awesome-icon',FontAwesomeIcon)
import './assets/styles/global.styl'

import anime from "animejs"
Vue.config.productionTip = false

import 'animate.css'
import store from './store'

import axios from 'axios'

Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
