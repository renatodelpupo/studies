import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'
import VueResource from 'vue-resource'

import { routes } from './routes';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import './directives/Transform';

Vue.use(VueRoute)
Vue.use(VueResource)
Vue.use(VeeValidate)

Vue.http.options.root = 'http://localhost:3000'

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})