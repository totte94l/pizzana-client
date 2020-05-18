<template>
    <div class="container">
        <h1 class="mb-2">Din meny</h1>
        <div id="menuItems" class="row justify-content-center">

          <div class="mb-3 col-12" v-for="(cat, index) in categories" :key="index">

            <h1 class="mt-2 mb-4 cat-title">{{ cat }}</h1>

            <div class="mb-3 col-12 menu-item" v-for="(item, index) in menu" :key="index" v-if="item.category == cat">

              <!-- Edit menu item view -->
                <template v-if="editingItem && item.id == editingItemId">
                    <div class="form-group row mb-0">
                        <div class="col-1">
                            <h1 class="">{{ item.id }}.</h1>
                        </div>
                        <div class="col-9">
                            <input type="text" class="form-control" v-model="editName">
                        </div>
                        <div class="col-2">
                          <input type="text" v-model="editPrice" class="form-control">
                        </div>
                    </div>
                    <div>
                        <span class="font-weight-bold">Ingredienser:</span>
                        <p>
                            <textarea class="form-control" v-model="editIngredients"></textarea>
                        </p>
                        <div class="row align-self-center">
                            <div class="col-12">
                                <button v-on:click="editItem(item)" class="btn btn-success mr-2">Spara</button>
                                <button v-on:click="cancelEdit" class="btn btn-danger mr-2">Avbryt</button>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Regular menu item view -->
                <template v-else>
                    <h1><span>{{ item.id }}. </span>{{ item.name }}<span class="float-right secondary_color">{{ item.price }}kr</span></h1>

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
                      <div class="row align-self-center">
                          <div class="col-12">
                              <button class="btn btn-primary mr-2" v-on:click="startEdit(item)">Ändra</button>
                              <button class="btn btn-danger" v-on:click="deleteItem(item.id)">Ta bort</button>
                          </div>
                      </div>
                    </div>
                </template>
            </div>
          </div>
        </div>
    </div>
</template>

<script>

import MenyService from '@/services/MenyService.js'
import store from '../store/index'

export default {
  data () {
    return {
      msg: '',
      editingItem: false,
      editingItemId: 0,
      editName: '',
      editIngredients: '',
      editPrice: 0
    }
  },
  methods: {
    async setMenu () {
      MenyService.SetMenu()
    },
    async deleteItem (id) {
      const data = {
        id: id
      }
      const response = await MenyService.deleteItem(data)

      this.msg = response.msg
    },
    startEdit (item) {
      this.editingItem = true
      this.editingItemId = item.id
      this.editName = item.name
      this.editIngredients = item.ingredients
      this.editPrice = item.price
    },
    async editItem (item) {
      const data = {
        id: item.id,
        name: this.editName,
        ingredients: this.editIngredients,
        price: this.editPrice
      }

      const response = await MenyService.editItem(data)

      this.msg = response.msg
      this.editingItem = false
    },
    cancelEdit () {
      this.editingItem = false
    }
  },
  mounted: function () {
    this.setMenu()
  },
  computed: {
    menu () {
      return store.getters.menu
    },
    categories () {
      const categoriesList = []

      this.menu.forEach(function (item) {
        const categorie = item.category
        categoriesList.indexOf(categorie) === -1 ? categoriesList.push(categorie) : console.log("finns redan!")
      })
      return categoriesList
    }
  }
}
</script>

<style scoped>
    #menuItems {
        padding: 10px;
    }

    .menu-item {
        border: 1px solid rgba(94, 94, 94, 0.158);
        padding: 20px;
    }

    .secondary_color {
      color: rgba(32, 32, 32, 0.856);
    }

    .cat-title {
      color: #444;
      border-bottom: 4px solid orange;
    }

    .small-icon {
      width: 25px;
      height: 25px;
    }

    .small-icon-text {
      
    }
</style>
