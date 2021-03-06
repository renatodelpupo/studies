import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'
import VueResource from 'vue-resource'
import VeeValidateMessages from 'vee-validate/dist/locale/pt_BR'

import { routes } from './routes';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import 'bootstrap/dist/css/bootstrap.css';

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

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

// Vue.http.interceptors.push((req, next) => {

//   // é possível colocar informações no header antes do envio da requisição
//   req.headers.set('Authorization', 'informação de segurança aqui');
//   console.log('Lidando com o request');

//   next(res => {
//     console.log('Lidando com a resposta')
//     // é possível acessar os dados da reposta e realizar transformações antes
//     console.log(res.body);
//   });
// });

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})