import axios from 'axios'
import store from '../store/index'

const url = 'http://localhost:3000/api/'

export default {
  SetMenu () {
    return axios
      .get(url + 'menu-items')
      .then(function (response) {
        store.dispatch('set_menu', response.data.menu)
      })
  },
  editMenu (data) {
    return axios
      .put(url + 'edit-item/', data)
      .then(response => response.data)
  },
  deleteItem (data) {
    console.log(data)
    const vm = this
    return axios
      .delete(url + 'delete-item/', { data: { data } } )
      .then(function (response) {
        vm.SetMenu()
        return response.data
      })
  }
}
