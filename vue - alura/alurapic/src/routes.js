import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
  { path: '', name: 'inicio', component: Home, name: 'Home' },
  { path: '/cadastro', name: 'cadastro', component: Cadastro, name: 'Cadastro' },
  { path: '*', component: Home, menuDisabled: true }
]