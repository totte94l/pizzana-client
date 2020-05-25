<template>
  <div class="container-fluide h-100" id="home_page">
    <div class="row no-gutters h-100">
      <div class="col-12" style="position: relative" id="home_img">
        <!-- <img src="../assets/home_bg.jpg" class="img-fluid bg_img_home" alt=""> -->
        <div class="home_text">
          <h1>Pizzana - </h1>
          <p>Det ska vara enkelt att synas online.</p>
          <router-link to="sign-up"><button type="button" class="btn btn-success btn-lg">Registrera ett konto och kom igång direkt</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
  #home_page {
    background-image: url(../assets/home_bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }

    .home_text h1 {
      font-size: 6em;
    }

    .home_text p {
      font-size: 4em;
    }
</style>
