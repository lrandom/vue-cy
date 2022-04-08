<template>

  <div>
    <div>Login Page</div>
    <form @submit.prevent="_login()">
      <input type="text" v-model="email"/>
      <input type="password" v-model="password"/>
      <button type="submit">Login</button>
    </form>

    <button @click="_getLoggedUserInfo()">Get Logged User Info</button>
  </div>
</template>

<script>
import {authService} from "../services/authService";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async _login() {
      try {
        const resp = await authService.doLogin({
          email: this.email,
          password: this.password
        })
        const data = resp.data;
        localStorage.setItem("token", data.token);
      } catch (e) {

        console.log(e)
      }
    },
    async _getLoggedUserInfo() {
      alert("X");
      try {
        const resp = await authService.getUser();
        const data = resp.data;
        console.log(data);
      } catch (e) {
        alert(e);
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>
