<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/Home";
import ParentComponent from "./components/ParentComponent";
export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      title:'Nguyen Thanh Luan Viet Nam, Dai Viet boi, da vang anh kim',
      content:'make Dai Viet great again',
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
    fetch(process.env.BASE_API+'home')//hard code
  },
  methods:{
    _boLayTien(money){
      alert(money);
      alert("Thank you very much");
    }
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
