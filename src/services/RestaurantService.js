import axios from 'axios'
import store from '../store/index'

const url = 'http://localhost:3000/api/'

export default {
  setRestaurantInfo (data) {
    return axios
      .post(url + 'restaurant-info', data)
      .then(function (response) {
        console.log("hejSAN", response.data.info)
        store.dispatch('update_restaurant_info', response.data.info)
      })
  },
  editRestaurant (data) {
    // const vm = this
    return axios
      .put(url + 'edit-about/', data)
      .then(function (response) {
        // vm.SetMenu()
        return response.data
      })
  }
}
