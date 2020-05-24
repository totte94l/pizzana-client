<template>
  <div class="container">

    <form v-on:submit.prevent>

      <!-- Restaurant name -->
      <div class="form-group">
        <label for="inp_rName">Restaurangen namn:</label>
        <input type="text" v-model="name" class="form-control" id="inp_rName">
      </div>

      <!-- Restaurant Description -->
      <div class="form-group">
        <label for="inp_rDesc">Restaurangens beskrivning:</label>
        <textarea id="inp_rDesc" v-model="description" class="form-control" rows="4"></textarea>
        <small id="emailHelp" class="form-text text-muted">En kortare text som beskriver restaurangen.</small>
      </div>

      <!-- Restaurant Address -->
      <div class="form-group">
        <label for="inp_address">Addres:</label>
        <textarea id="inp_address" v-model="address" class="form-control" rows="3"></textarea>
      </div>

      <!-- Restaurant Open hours -->
      <div class="form-group">
        <label for="inp_openHours">Öppettider:</label>
        <textarea id="inp_openHours" v-model="openHours" class="form-control" rows="5"></textarea>
      </div>

      <!-- Restaurant phone number -->
      <div class="form-group">
        <label for="inp_rName">Telefonnummer:</label>
        <input type="tel" v-model="phone" class="form-control" id="inp_phone">
        <small id="emailHelp" class="form-text text-muted">Telefonnummer till restaurangen. Hit kan kunder ringa för att kontakta er.</small>
      </div>

      <div class="row">
        <div class="col-md-1">
          <button v-on:click="editRestaurant" class="btn btn-primary mb-5">Spara</button>
        </div>
        <div class="col-md-11">
          <transition name="fade">
            <Alert type="success" v-if="didUpdate" class="mb-4">
              {{ msg }}
            </Alert>
          </transition>
        </div>
      </div>
    </form>

  </div>
</template>

<script>

import RestaurantService from '../services/RestaurantService'
import store from '../store/index'
import Alert from '../components/Alert'

export default {
  data () {
    return {
      name: '',
      description: '',
      address: '',
      openHours: '',
      phone: '',
      msg: '',
      didUpdate: false
    }
  },
  components: {
    Alert
  },
  methods: {
    async editRestaurant () {
      const data = {
        name: this.name,
        description: this.description,
        address: this.address,
        openHours: this.openHours,
        phone: this.phone,
        owner: store.getters.getUser.id
      }

      const response = await RestaurantService.editRestaurant(data)

      this.setRestaurantInfo()
      this.showAlert()

      this.msg = response.msg
    },
    async setRestaurantInfo () {
      const data = {
        id: store.getters.getUser.id
      }

      RestaurantService.setRestaurantInfo(data)
    },
    showAlert () {
      this.didUpdate = true
      const vm = this

      setTimeout(function () {
        vm.didUpdate = false
      }, 4000)
    }
  },
  beforeMount () {
    this.setRestaurantInfo()
  },
  computed: {
    restaurant () {
      return store.getters.restaurant
    }
  },
  watch: { // watch changes here
    restaurant: function (newValue, oldValue) {
      this.name = this.restaurant.name
      this.description = this.restaurant.description
      this.address = this.restaurant.address
      this.openHours = this.restaurant.open_hours
      this.phone = this.restaurant.phone
    }
  },
  mounted: function () {

  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
</style>
