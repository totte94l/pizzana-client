<template>
  <div id="app">
      <Navbar />
      <router-view/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
// import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

body, html {
  background-color: rgba(255,61,61,1)
}

#app {
  height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding:0;
  font-family: 'Raleway', sans-serif;
  background: rgb(255,74,74);
  background: -moz-linear-gradient(180deg, rgba(255,74,74,1) 0%, rgba(255,61,61,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255,74,74,1) 0%, rgba(255,61,61,1) 100%);
  background: linear-gradient(180deg, rgba(255,74,74,1) 0%, rgba(255,61,61,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff4a4a",endColorstr="#ff3d3d",GradientType=1);
}

h1, h2, span, p, label, small, td {
  color: white;
}

a {
  color: #72d9ea;
}

a:hover {
  color: #8edbe9;
}

.wrapper {
  height: auto;
}

.footer {
  position: absolute;
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
