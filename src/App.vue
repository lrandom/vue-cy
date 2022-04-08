<template>
  <div>
    <!--    <router-link to="/">Home</router-link>
        <router-link to="/lien-he">Contact</router-link>
        <router-link to="/dang-nhap">Login</router-link>

        <br>
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'contact'}">Contact</router-link>
        <router-link :to="{name:'login'}">Login</router-link>

        <br>
        <router-link :to="{path:'/'}">Home</router-link>
        <router-link :to="{path:'/lien-he'}">Contact</router-link>
        <router-link :to="{path:'/dang-nhap'}">Login</router-link>

        <router-view></router-view>

        <button @click="_goToContactPage">Chuyển sang trang contact</button>-->
    <ControlCounter></ControlCounter>
    <DisplayCounter></DisplayCounter>
    <DisplayHomeProduct></DisplayHomeProduct>
    <button @click="$store.dispatch('loadHomeProducts')">Get Home Product</button>
    <button @click="loadHomeProducts()">Get Home Product</button>
    <button @click="_setHuman()">Set Human</button>
  </div>
</template>

<script>
import DisplayHomeProduct from "./components/DisplayHomeProduct";
import ControlCounter from "./components/ControlCounter";
import DisplayCounter from "./components/DisplayCounter";
import {mapActions, mapMutations} from "vuex";

export default {
  name: 'App',
  components: {
    DisplayHomeProduct,
    ControlCounter,
    DisplayCounter
  },
  data() {
    return {
      title: 'Nguyen Thanh Luan Viet Nam, Dai Viet boi, da vang anh kim',
      content: 'make Dai Viet great again',
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
    fetch(process.env.BASE_API + 'home')//hard code
  },
  methods: {
    ...mapActions(['loadHomeProducts']),
    _boLayTien(money) {
      alert(money);
      alert("Thank you very much");
    },
    _goToContactPage() {
      //this.$router.push({name: 'contact'});
      this.$router.replace({name: 'contact'});
      this.$router.back();//quay trở lại page trước
      this.$router.go(-1);//quay trở lại page trước
      this.$router.forward();//tiến tới trang sau
      this.$router.push({name: 'contact', query: {id: 1}});
      return;
    },
    _setHuman() {
  /*    this.$store.commit('setHuman',
          {name: 'Nguyen Thanh Luan Viet Nam'});*/
      this.setHuman({name: 'Nguyen Thanh Luan Viet Nam'});
    },
    ...mapMutations(['setHuman'])
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
