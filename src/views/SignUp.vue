<template>
  <div>
    <div class="container mt-5">
      <div class="row w-100 justify-content-center">
        <div class="col-6 ">
          <div id="login_form" class="form-group">

            <label for="inp_username">Användarnamn:</label>
            <input name="inp_username" type="text" class="form-control" v-model="username" />

            <label for="inp_password" class="mt-2">Lösenord:</label>
            <input name="inp_password" type="password" class="form-control" v-model="password" />

            <label for="inp_password" class="mt-2">Repetera lösenord:</label>
            <input type="password" name="inp_password_repeat" class="form-control mb-3" placeholder="" v-model="password_repeat"/>

            <input type="button" @click="signUp" class="btn btn-primary" value="Registrera konto" />

            <p class="mt-4 alert alert-warning" v-if="msg">{{ msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AuthService from '@/services/AuthService.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      password_repeat: '',
      msg: ''
    }
  },
  methods: {
    async signUp () {
      try {
        const credentials = {
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat
        }
        const response = await AuthService.signUp(credentials)
        this.msg = response.msg
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
}
</script>
