<template>
  <div class="container-fluide w-100">
    <div class="row no-gutters">
      <div class="col-12" style="position: relative" id="home_img">
        <img src="../assets/home_bg.jpg" class="img-fluid bg_img_home" alt="">
        <div class="home_text" style="position: absolute">
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

<style scoped>
  .bg_img_home {
    position: absolute;
    z-index: 1;
  }

  .home_text {
    z-index: 9999;
    color: white;
    top: 288px;
    left: 143px;
  }

    .home_text h1 {
      font-size: 6em;
    }

    .home_text p {
      font-size: 4em;
    }
</style>
