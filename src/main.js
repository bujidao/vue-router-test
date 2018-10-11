// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@/assets/css/reset.css'

import store from './store'

Vue.prototype.$axios = axios

// require('./mockjs/index.js')

Vue.use(ElementUI, axios, VueAxios)

Vue.config.productionTip = false

// test content
Vue.filter('currency', function (val, util) {
  val = val || 0;
  util = util || '元';
  return val * 100 + util
})

Vue.directive('pin', function (el, binding) {
  var pinned = binding.value;
  var position = binding.modifiers;
  console.log('i am going to binding')
  console.log(position);
  if (pinned) {
    el.style.position = 'fixed';
    if (position.top) {
      el.style.top = '20px'
    } else if (position.left) {
      el.style.left = '20px'
    } else if (position.bottom) {
      el.style.bottom = '20px'
    } else if (position.right) {
      el.style.right = '20px'
    }
  } else {
    el.style.position = 'static'
  }
})

// pin 自定义属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
