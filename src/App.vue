<template>
  <div id="app">
    <CyVietNam v-if="loadComponent"></CyVietNam>
    <button @click="loadComponent=!loadComponent">Load Component</button>
  </div>
</template>

<script>
import CyVietNam from "./components/CyVietNam";

export default {
  name: 'App',
  components: {
    CyVietNam
  },
  data() {
    return {
      loadComponent: false
    }
  },
  computed: {
    nameOfUser() {
      const {name} = this.user//ES6
      return name;
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
