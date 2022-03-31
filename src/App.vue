<template>
  <div id="app">
    <div>{{ message }}</div>
    <div>{{ user.name }}</div>
    <div>{{ nameOfUser }}</div>
    <button @click="increaseNumber()">InNumber</button>
    <button @click="decreaseNumber()">DeNumber</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      message: 'Hello Viet Nam',
      numberCounter: 10,
      user: {
        name: 'Nguyen Van A',
        age: 20
      }
    }
  },
  computed: {
    nameOfUser() {
      const {name} = this.user//ES6
      return name;
    }
  },
  watch: {
    numberCounter(newValue, oldValue) {
      console.log("old Value"+oldValue);
      console.log("new Value"+newValue);
    }
  },
  methods: {
    increaseNumber() {
      this.numberCounter++;
    },
    decreaseNumber() {
      this.numberCounter--;
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
