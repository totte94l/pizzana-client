import axios from 'axios'
import store from '../store/index'

const url = 'http://localhost:3000/api/'

export default {
  SetMenu (data) {
    return axios
      .post(url + 'menu-items', data)
      .then(function (response) {
        store.dispatch('set_menu', response.data.menu)
      })
  },
  editItem (data) {
    const vm = this
    return axios
      .put(url + 'edit-item/', data)
      .then(function (response) {
        const id = {
          id: store.getters.getUser.id
        }

        vm.SetMenu(id)
        return response.data
      })
  },
  deleteItem (data) {
    const vm = this
    return axios
      .delete(url + 'delete-item/', { data: { data } })
      .then(function (response) {
        const id = {
          id: store.getters.getUser.id
        }

        vm.SetMenu(id)
        return response.data
      })
  },
  addItem (data) {
    const vm = this
    return axios
      .post(url + 'add-item', { data: { data } })
      .then(function (response) {
        const id = {
          id: store.getters.getUser.id
        }

        vm.SetMenu(id)
        return response.data
      })
  }
}
