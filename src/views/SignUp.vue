<template>
  <div>
     <img style="position: absolute; right: 0; bottom: 0" src="../assets/bg_flow.png" class="" alt="">
    <div class="container mt-5 h-100" style="overflow: hidden">
      <div class="row w-100 justify-content-center">
        <div class="col-6 ">
          <div id="login_form" class="form-group">
            <h1>Skapa ett konto för att börja bygga din sida.</h1>
            <h3>- Det är både snabbt & enkelt!</h3>
            <label class="mt-3" for="inp_username">Användarnamn:</label>
            <input name="inp_username" type="text" class="form-control" v-model="username" />

            <label for="inp_password" class="mt-2">Lösenord:</label>
            <input name="inp_password" type="password" class="form-control" v-model="password" />

            <label for="inp_password" class="mt-2">Repetera lösenord:</label>
            <input type="password" name="inp_password_repeat" class="form-control mb-3" placeholder="" v-model="password_repeat"/>

            <label class="mt-5" for="routeName">Webbadress:</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">pizzana.se/</span>
              </div>
              <input type="text" name="routeName" v-model="routeName" class="form-control" placeholder="restaurangnamn" aria-label="restaurangnamn" aria-describedby="basic-addon1">
            </div>

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
      routeName: '',
      msg: '',
      localMsg: []
    }
  },
  methods: {
    async signUp () {
      const credentials = {
        username: this.username,
        password: this.password,
        password_repeat: this.password_repeat,
        routeName: this.routeName
      }

      if (credentials.routeName === '') {
        this.msg = 'Du måste ange en webbadress'
      } else if (credentials.routeName.length > 20) {
        this.msg = 'Webbadressen får inte vara längre än 20 tecken.'
      } else if (credentials.username === '' || credentials.password === '' || credentials.password_repeat === '') {
        this.msg = 'Inget fält får vara tomt.'
      } else {
        try {
          const response = await AuthService.signUp(credentials)
          this.msg = response.msg
        } catch (error) {
          this.msg = error.response.data.msg
        }
      }
    }
  }
}
</script>
