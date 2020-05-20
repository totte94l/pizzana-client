<template>
    <nav class="navbar navbar-expand-lg sticky-top navbar-light mb-3">
        <div class="container">
            <a class="navbar-brand" href="#"><img class="logotype" src="../assets/logotype.png"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <template v-if="isLoggedIn">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mr-auto">
                            <routerLink to="/meny" class="nav-link">Min meny</routerLink>
                        </li>
                        <li class="nav-item mr-auto">
                            <routerLink to="/about" class="nav-link">Om Oss</routerLink>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-auto">
                            <a class="nav-link" href="#"><i class="far fa-user-circle"></i> {{ user.username }}</a>
                        </li>
                        <li class="nav-item mr-auto">
                            <span class="nav-link" v-on:click="logout">Logga ut</span>
                        </li>
                    </ul>
                </template>

                <template v-else>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-auto">
                            <routerLink to="login" class="nav-link" href="#">Logga in</routerLink>
                        </li>
                        <li class="nav-item mr-auto">
                            <routerLink to="sign-up" class="nav-link">Registrera konto</routerLink>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: 'Navbar',

  data () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style scoped>
    .navbar {
        background: #420059;;
    }

    .nav-link {
        font-size: 1.3em !important;
        color: white !important;
    }

    .nav-link:hover {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
