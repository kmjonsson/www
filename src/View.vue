<template>
    <div class="container" id="app">
      <h1 class="title">
        {{foo}} ({{$route.params.id}}) [{{id}}] { {{moj}} }
      </h1>
      <p class="subtitle" v-html="bar">
      </p>
    </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
	foo: "Hello World",
	bar: "My first website with <strong>Bulma</strong>!",
	moj: "default",
    }
  },
  methods: {
  },
  computed: {
	id() {
		if(this.$route.params.id !== undefined) {
			return this.$route.params.id;
		}
		return "default";
	},
  },
  watch: {
    '$route' (to, from) {
	this.moj = this.$route.params.id;
    }
  }
}
</script>

<style scoped>
</style>
