
<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-if="page">
        <component :is="view_component" :page="page"></component>
      </div>
    </transition>
  </div>
</template>

<script>

import yaml from 'yaml-js'
import axios from 'axios'

import DefaultView from './DefaultView.vue'

export default {
  name: 'MyView',
  data () {
    return {
      id: '',
      page: null,
    }
  },
  created () {
    this.id = this.$route.params.id;
  },
  computed: {
    view_component() {
      if(this.page !== undefined && this.page.view !== undefined) {
        return this.page.view;
      }
      return "DefaultView";
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = this.$route.params.id;
      this.page = null;
    },
    'id' (to, from) {
      axios.get("data/" + this.id + ".yaml", {
        'responseType': 'text'
      }).then(r => yaml.load(r.data)).then(r => { this.page = r; });
    }
  },
  components: {
    DefaultView
  }
}

</script>

<style scoped>
</style>
