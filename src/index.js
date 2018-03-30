import 'bulma/css/bulma.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

import View from './View.vue'

import './components.js'

Vue.use(VueRouter);

const routes = [
  { path: '/page/:id', component: View, name: "page" },
  { path: '/foo/:id', component: View, name: "foo" },
];

const router = new VueRouter({
  // mode: 'history',
  routes
});

var app = new Vue({
  //store,
  el: '#app',
  router,
  //render: h => h(Main),
  computed: {
  },
  watch: {
  },
});
