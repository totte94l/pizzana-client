<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="col-12">
            <button class="btn btn-success mb-3" v-on:click="fnShowAddNewItem" v-html="showAddNewItemBtnText"></button>
            <slide-up-down :active="showAddNewItem" :duration="1000">
              <NewMenyItem v-if="showAddNewItem" />
            </slide-up-down>
          </div>
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
import SlideUpDown from 'vue-slide-up-down'
import AuthService from '../services/AuthService'

export default {
  components: {
    MenyList,
    NewMenyItem,
    SlideUpDown
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
        return '<i class="fas fa-minus mr-2"></i>Dölj'
      } else {
        return '<i class="fas fa-plus mr-1"></i> Lägg till ny rätt'
      }
    }
  },
  created () {
    AuthService.redirectIfNotLoggedIn()
  }
}
</script>

<style>

</style>
