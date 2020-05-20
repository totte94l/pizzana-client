<template>
  <div class="container mt-3 mb-3" id="addNewItem">
      <div class="row">
        <div class="col-12 mt-3">
          <div class="form-group row mb-0">
            <div class="col-10">
                <input type="text" class="form-control" placeholder="Namn" v-model="name">
            </div>
            <div class="col-2">
              <input type="text" placeholder="Pris" v-model="price" class="form-control">
            </div>
          </div>
          <div class="mt-2">

            <div class="form-group">
              <label for="txt_ingredients" class="font-weight-bold">Ingredienser:</label>
              <textarea name="txt_ingredients" class="form-control" v-model="ingredients"></textarea>
            </div>

              <div class="form-group">
              <label for="txt_ingredients" class="font-weight-bold">Kategori:</label>
              <input type="text" placeholder="Kategori (Pizzor, Sallad..)" v-model="category" class="form-control">
            </div>

            <div class="form-check mt-3">
              <input type="checkbox" class="form-check-input" id="isGlutenFree" v-model="glutenFree" value="">
              <label for="isGlutenFree" class="form-check-label">Glutenfri</label>
            </div>

            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="lactoseFree" id="isLactoseFree">
              <label for="isLactoseFree" class="form-check-label">Laktosfri</label>
            </div>

            <div class="row align-self-center mt-3">
                <div class="col-12">
                    <button v-on:click="addItem" class="btn btn-success mr-2">Spara</button>
                </div>
            </div>
            <transition name="fade" class="">
              <Alert class="mt-4" :type="alertType" v-if="addedNewItem">
                {{ msg }}
              </Alert>
            </transition>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import MenyService from '../services/MenyService'
import store from '../store/index'
import Alert from '../components/Alert'

export default {
  name: 'AddMenyItem',
  data () {
    return {
      name: '',
      price: '',
      ingredients: '',
      glutenFree: false,
      lactoseFree: false,
      msg: '',
      menu: '',
      category: '',
      addedNewItem: false,
      alertType: String
    }
  },
  components: {
    Alert
  },
  methods: {
    async addItem () {
      const data = {
        name: this.name,
        ingredients: this.ingredients,
        category: this.category,
        glutenFree: this.glutenFree,
        lactoseFree: this.lactoseFree,
        price: this.price
      }

      const response = await MenyService.addItem(data)

      if (response.success === 'true') {
        this.alertType = 'success'
      } else {
        this.alertType = 'danger'
      }
      this.showAlert()

      this.msg = response.msg
    },
    showAlert () {
      this.addedNewItem = true
      const vm = this

      setTimeout(function () {
        vm.addedNewItem = false
      }, 4000)
    }
  }
}
</script>

<style>
  #addNewItem {
    border: 1px solid rgba(75, 75, 75, 0.322);
    padding: 20px;
    border-radius: 10px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
