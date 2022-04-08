<template>
  <div>
    <h1>Display Counter Component</h1>
    {{ $store.state.count }}
    {{ count }}
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "DisplayCounter",
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped>

</style>
