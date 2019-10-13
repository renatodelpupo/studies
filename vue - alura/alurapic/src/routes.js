import Home from './components/home/Home.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');

export const routes = [
  { path: '', name: 'inicio', component: Home, titulo: 'Início' },
  { path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro' },
  { path: '/cadastro/:id', name: 'edição', component: Cadastro, titulo: 'Edição', menuDisabled: true },
  { path: '*', component: Home, menuDisabled: true }
]