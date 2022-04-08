<template>
  <div>
    <h1>Control Counter Component</h1>
    <button @click="$store.commit('increment')">Tăng</button>
    <button @click="$store.commit('decrement')">Giảm</button>

    <button @click="increment()">Tăng</button>
    <button @click="decrement">Giảm</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "ControlCounter",
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>

<style scoped>

</style>
