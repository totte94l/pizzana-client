<template>
  <div class="container">
    <div id="menuItems" class="row justify-content-center">
      <div class="mb-3 col-12" v-for="(cat, index) in categories" :key="index">
         <h1 class="mt-2 mb-4 cat-title">{{ cat }}</h1>
            <div class="mb-3 col-12 menu-item" v-for="(item, index) in menu" :key="index" v-if="item.category == cat">
              <h1><span>{{ index + 1 }}. </span>{{ item.name }}<span class="float-right">{{ item.price }}kr</span></h1>

                <div v-if="item.glutenFree || item.lactoseFree " class="mt-3 mb-3 icon_holder">
                  <div v-if="item.glutenFree " class="mt-3 mb-3">
                    <img class="small-icon" src="../assets/gluten_free_icon.png">
                    <span class="ml-2 small-icon-text">Glutenfri</span>
                  </div>

                  <div v-if="item.lactoseFree" class="mt-3 mb-3">
                    <img class="small-icon" src="../assets/lactose_free_icon.png">
                    <span class="ml-2 small-icon-text">Laktosfri</span>
                  </div>
                </div>
              <div>
                <span class="font-weight-bold">Ingredienser:</span>
                <p>
                    {{ item.ingredients }}
                </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import PublicService from '../services/PublicService'
import store from '../store/index'

export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    async getMenu () {
      const data = {
        routeName: this.$route.params.name
      }
      const response = await PublicService.GetMenu(data)
      console.log(response);
      this.msg = response.data.msg

      return response
    },
    async getRestaurant () {
      const data = {
        id: this.menu.owner
      }
      const response = await PublicService.GetRestaurant(data)
      console.log("rest:", response);
      this.msg = response.data.msg

      return response
    },
    log () {
      console.log(this.menu)
    }
  },
  mounted: function () {
    this.getMenu()
    this.getRestaurant()
  },
  computed: {
    menu () {
      return store.getters.publicMenu
    },
    categories () {
      const categoriesList = []

      this.menu.forEach(function (item) {
        const categorie = item.category
        categoriesList.indexOf(categorie) === -1 ? categoriesList.push(categorie) : console.log('finns redan!')
      })
      return categoriesList
    }
  }
}
</script>

<style>

</style>
