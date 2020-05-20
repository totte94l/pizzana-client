import axios from 'axios'
import store from '../store/index'

const url = 'http://localhost:3000/api/'

export default {
  setRestaurantInfo () {
    return axios
      .get(url + 'restaurant-info')
      .then(function (response) {
        console.log(response.data.info)
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
