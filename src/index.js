import 'bulma/css/bulma.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

import View from './View.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: View },
  { path: '/page/:id', component: View },
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

var app = new Vue({
  //store,
  el: '#app',
  router,
  //render: h => h(View),
  computed: {
  },
  watch: {
  },
});
