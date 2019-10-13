import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidateMessages from '../node_modules/vee-validate/dist/locale/pt_BR'

import { routes } from './routes';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import './directives/Transform';

Vue.use(VueRoute)
Vue.use(VueResource)
Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: VeeValidateMessages
    }
  }
})

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