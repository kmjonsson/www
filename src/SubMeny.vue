

<template>
  <div class="content">
    <ul>
      <li v-for="m in submeny" :key="m.title">
        <router-link :to="{name:'page',params: { id: m.page }}" >{{m.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'SubMeny',
  props: ['submeny']
}

</script>

<style scoped>
</style>
