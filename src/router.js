
import VueRouter from 'vue-router'

import View from './View.vue'

const routes = [
  { path: '/page/:id', component: View, name: "page" },
  { path: '/', redirect: { name: 'page',params: { id: 'home' }} },
];

export default new VueRouter({
  // mode: 'history',
  routes
});
