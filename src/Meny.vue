

<template>
<nav class="navbar is-success is-not-fixed-top">
  <div class="navbar-brand">
    <router-link :to="{name:'page',params: { id: 'home' }}" class="navbar-item">www.fot.nu</router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample" @click="show = !show" v-bind:class="{ 'is-active': show }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': show }">
    <div class="navbar-end" @click="show=false">
      <router-link v-for="m in meny" :to="{name:'page',params: { id: m.page }}" class="navbar-item" :key="m.title">{{m.title}}</router-link>
    </div>
  </div>
</nav>
</template>

<script>

import yaml from 'yaml-js'
import axios from 'axios'

export default {
  name: 'Meny',
  props: ['page'],
  data () {
    return {
      show: false,
      meny: null
    }
  },
  created () {
    this.load_page();
  },
  methods: {
    load_page() {
      axios.get("data/meny.yaml", {
        'responseType': 'text'
      }).then(r => yaml.load(r.data)).then(r => { this.meny = r; });
    }
  },
}

</script>

<style scoped>
</style>
