<template>
  <div class="container">
    User {{ $route.params.name }}
    <button v-on:click="log()">KnappeN</button>

    <div v-for="(item, index) in menu" :key="index" >
        {{ item.name }}
    </div>
  </div>
</template>

<script>

import PublicService from '../services/PublicService'
import store from '../store/index'

export default {
  methods: {
    async getMenu () {
      const data = {
        routeName: this.$route.params.name
      }
      const response = await PublicService.GetMenu(data)
      return response
    },
    log () {
      console.log(this.menu)
    }
  },
  mounted: function () {
    this.getMenu()
  },
  computed: {
    menu () {
      return store.getters.publicMenu
    }
  }
}
</script>

<style>

</style>
