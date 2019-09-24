import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes';
import VueRouter from 'vue-router';

import './directives/Transform';

Vue.use(VueRoute)
Vue.use(VueResource)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})