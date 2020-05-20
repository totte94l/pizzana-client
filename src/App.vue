<template>
  <div id="app">
    <div class="wrapper">
      <Navbar />
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import RestaurantService from './services/RestaurantService'

export default {
  components: {
    Navbar,
    Footer
  },
  methods: {
    async setRestaurantInfo () {
      RestaurantService.setRestaurantInfo()
    }
  },
  mounted () {
    this.setRestaurantInfo()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding:0;
  height:100%;
  font-family: 'Raleway', sans-serif;
}

.wrapper {
    position:relative; /* this makes the main the nearest positioned ancestor to the AP footer. */
    padding-bottom: 160px; /* protects the content from the overlapping footer. */
    min-height: 100vh; /* it will overflow the body when more content fills up. So the scrollbar is the normal on the root element.  */
}

.footer {
  position: absolute; /* This is a footer that is contained by a positioned main container */
  bottom: 0;
  width: 100%;
  height: 180px; /* .push must be the same height as .footer */

}

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .logotype {
      width: 100px;
  }
</style>
