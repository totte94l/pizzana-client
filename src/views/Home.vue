<template>
  <div class="container-fluide h-100" id="home_page">
    <div class="row no-gutters h-100 align-items-center">
      <div class="col-12" style="position: relative" id="home_img">
        <!-- <img src="../assets/home_bg.jpg" class="img-fluid bg_img_home" alt=""> -->
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1 class="super_header">Pizzana - </h1>
              <p class="font_text">Det ska vara enkelt att synas online.</p>
              <router-link to="sign-up"><button type="button" class="btn btn-success btn-lg">Registrera ett konto och kom igång direkt</button></router-link>
            </div>
          </div>
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

    .super_header {
      font-size: 6em;
    }

    .font_text {
      font-size: 4em;
    }
</style>
