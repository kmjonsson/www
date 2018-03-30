

<template>
    <div class="container" id="app">
      <h1 class="title">
        {{page.title}}
      </h1>
      <p class="subtitle">        
        <component v-bind:is="transformed"></component>
      </p>
      <transition name="fade">
      <div v-if="on">kaka</div>
      </transition>
      <button @click="on=!on">Tryck</button>
    </div>
</template>

<script>

import yaml from 'yaml-js'
import axios from 'axios'
import showdown from 'showdown'

var linkext = function () {
  return [
    {
      type: 'lang',
      regex: /@([^\/]+)\/([^@]+)@/g,
      replace: "<goto-page page='$1'>$2</goto-page>"
    }
  ]
};

let converter = new showdown.Converter({ extensions: [linkext]});

export default {
  name: 'app',
  data () {
    return {
      id: '',
      page: { 'title': '', 'body':'' },
      on: true,
    }
  },
  created () {
    this.id = this.$route.params.id;
    this.load_page();
  },
  methods: {
    load_page() {
      axios.get("data/" + this.id + ".yaml", {
        'responseType': 'text'
      }).then(r => yaml.load(r.data)).then(r => { console.log(r); this.page = r; });
    }
},
  computed: {
    transformed() {
      return {
        template: "<div>" + converter.makeHtml(this.page.body) + "</div>"
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = this.$route.params.id;
      this.load_page();
    }
  }
}

</script>

<style scoped>
</style>