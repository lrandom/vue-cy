<template>
  <div id="app">
    <CyVietNam v-if="loadComponent"
               @conChoBoTien="_boLayTien"
               :content="content"></CyVietNam>
    <Hieu></Hieu>
    <button @click="loadComponent=!loadComponent">Load Component</button>
  </div>
</template>

<script>
import CyVietNam from "./components/CyVietNam";
import Hieu from "./components/Hieu";
export default {
  name: 'App',
  components: {
    Hieu,
    CyVietNam
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
