<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success" v-on:click="fnShowAddNewItem">{{ showAddNewItemBtnText }}</button>
          <NewMenyItem v-if="showAddNewItem" />
        </div>

      </div>
      <div class="row">
        <div class="col-12">
          <MenyList />
        </div>
      </div>
    </div>
</template>

<script>

import MenyList from '../components/MenyList'
import NewMenyItem from '../components/AddMenyItem'

export default {
  components: {
    MenyList,
    NewMenyItem
  },
  data () {
    return {
      showAddNewItem: false
    }
  },
  methods: {
    fnShowAddNewItem () {
      this.showAddNewItem = !this.showAddNewItem
    }
  },
  computed: {
    showAddNewItemBtnText () {
      if (this.showAddNewItem) {
        return 'Dölj'
      } else {
        return 'Lägg till ny rätt'
      }
    }
  }
}
</script>

<style>

</style>
