<template>
    <div class="container mt-5">
        <table class="table table-user-information" v-if="!isChangingPassword">
            <tbody>
                <tr>
                    <td>Inloggad som</td>
                    <td>{{ user.username }}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Webbadress</td>
                    <td><router-link :to="restaurant.route_name" target="_blank">http://localhost:8080/{{ restaurant.route_name }}</router-link></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Lösenord</td>
                    <td>*********</td>
                    <td><button v-on:click="toggleIsChangingPassword" class="btn btn-success ml-2">Ändra</button></td>
                </tr>
                <tr>
                    <td>Registrerad</td>
                    <td>{{ user.registered }}</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Senast inloggad</td>
                    <td>{{ user.last_login }}</td>
                    <td style="text-align: center"></td>
                </tr>
            </tbody>
        </table>

        <div v-if="isChangingPassword" class="row">
            <div class="col-12">
                <h1>Ändra ditt lösenord</h1>
                <div class="row">
                    <div class="col-md-6">
                        <label for="new_password">Nytt lösenord:</label>
                        <input name="new_password" v-model="newPassword" class="form-control" type="password">
                    </div>
                    <div class="col-md-6">
                        <label for="repeat_password">Upprepa lösenordet:</label>
                        <input name="repeat_password" v-model="repeatNewPassword" class="form-control" type="password">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <button v-on:click="changePassword" class="btn btn-success mt-3">Spara</button>
                        <button class="btn btn-danger mt-3 ml-3" v-on:click="toggleIsChangingPassword">Avbryt</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-3">
                        <span>{{ msg }}</span>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import store from '../store/index'
import AuthService from '../services/AuthService'

export default {
  data () {
    return {
      username: '',
      newPassword: '',
      repeatNewPassword: '',
      isChangingPassword: false,
      msg: ''
    }
  },
  methods: {
    toggleIsChangingPassword () {
      this.isChangingPassword = !this.isChangingPassword
    },
    async changePassword () {
      if (this.newPassword === this.repeatNewPassword) {
        // All good
        const data = {
          username: store.getters.getUser.username,
          password: this.newPassword
        }

        const response = await AuthService.changePassword(data)
        console.log(response)

        this.msg = response.data.msg
      } else {
        this.msg = 'Lösenorden matchar inte!'
      }
    }
  },
  computed: {
    user () {
      console.log(store.getters.getUser)
      return store.getters.getUser
    },
    restaurant () {
      /* const address = store.getters.restaurant.route_name
      return `<routerLink class='nav-link' to='/${address}'>http://localhost:8080/${address}</routerLink>` */
      return store.getters.restaurant
    }
  },
  created () {
    AuthService.redirectIfNotLoggedIn()
  }
}
</script>

<style>
td {
  vertical-align: middle;
}
</style>
