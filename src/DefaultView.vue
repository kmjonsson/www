

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-9-desktop is-offset-0-desktop is-10-touch is-offset-1-touch">
        <div class="columns">
          <div class="column is-12 has-text-centered">
            <h1 class="is-size-1">{{page.title}}</h1>
            <h2 class="is-size-4" v-if="page.subtitle">{{page.subtitle}}</h2>
          </div>
        </div>
          <component v-bind:is="body"></component>
      </div>
      <div class="column is-3-desktop is-hidden-touch has-text-right">
        <img class="focus-image" src="https://www.fot.nu/themes/radio_tower256.png" alt="radio"/>
      </div>
    </div>
  </div>
</template>

<script>

import converter from './md.js'

export default {
  name: 'DefaultView',
  props: ['page'],
  data () {
    return {
    }
  },
  computed: {
    body() {
      return {
        template: '<div class="content has-text-justified-mobile">' + converter.makeHtml(this.page.body) + "</div>"
      }
    }
  },
}

</script>

<style scoped>
img.focus-image {
  padding-top: 0.75rem;
}
div.indrag {
  margin-left: 8.33333%;
  padding: 0.75rem;
}
</style>