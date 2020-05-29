import axios from 'axios'
import store from '../store/index'

const url = 'http://localhost:3000/api/'

export default {
  GetMenu (data) {
    return axios
      .post(url + 'public-menu/', data)
      .then(function (response) {
        store.dispatch('set_public_menu', response.data.menu)
        return response
      })
  },
  GetRestaurant (data) {
    return axios
      .post(url + 'public-restaurant', data)
      .then(function (response) {
        console.log("Public SErvice", response)
        store.dispatch('set_public_restaurant', response.data.info)
        return response
      })
  }
}
