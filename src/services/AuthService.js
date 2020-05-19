import axios from 'axios'
import store from '../store/index'
import router from '../router/index'

const url = 'http://localhost:3000/api/'

export default {
  login (credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data)
  },
  signUp (credentials) {
    return axios
      .post(url + 'sign-up/', credentials)
      .then(response => response.data)
  },
  getSecretContent () {
    return axios.get(url + 'secret-route/').then(response => response.data)
  },
  redirectIfNotLoggedIn () {
    if (store.getters.isLoggedIn) {
      console.log("user loggedin")
      return 'User is logged in'
    } else {
      router.push('/login')
    }
  }
}
