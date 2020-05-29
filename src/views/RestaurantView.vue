<template>
  <div class="container">
    <div class="row justify-items-center">
      <div class="col-12 menu-item mt-3">
        <h1 class="font-weight-bold">{{ restaurant.name }}</h1>
        <p>{{ restaurant.description }}</p>
        <div class="rest_about_container">
          <div id="rest_address">
            <div class="secondaryColor font-weight-bold"><i class="fas fa-map-marker-alt"></i> Adress: </div>
            <textarea rows="2" class="areaTextFix italic">{{ restaurant.address }}</textarea>
          </div>
          <div id="orest_open_hours">
            <div class="secondaryColor font-weight-bold"><i class="far fa-clock"></i> Öppettider:</div>
            <textarea rows="4" class="areaTextFix italic">{{ restaurant.open_hours }}</textarea>
          </div>
          <div id="orest_open_hours">
            <div class="secondaryColor font-weight-bold"><i class="fas fa-phone-alt"></i> Telefonnummer:</div>
            <span class="font-italic">{{ restaurant.phone }}</span>
          </div>
        </div>
      </div>
    </div>
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
  data () {
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
      console.log(response)
      this.msg = response.data.msg

      return response
    },
    async getRestaurant () {
      const data = {
        routeName: this.$route.params.name
      }
      const response = await PublicService.GetRestaurant(data)
      this.msg = response.data.msg

      return response
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
    },
    restaurant () {
      return store.getters.publicRestaurant
    }
  }
}
</script>

<style>
  #restaurantInfo {
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.397);
  }

  .rest_about_container {

  }

  .areaTextFix {
    border: none;
    background: none;
    color: white;
    outline: none;
    resize: none;
  }

  .secondaryColor {
    color: white
  }
</style>
