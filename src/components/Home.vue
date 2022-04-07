<template>
  <div>{{homeData}}</div>
</template>

<script>
import {homeService} from "../services/homeService";

export default {
  name: "Home",
  data() {
    return {
      homeData: {}
    };
  },
  async mounted() {
    try {
      const resp = await homeService.getHome();
      this.homeData = resp.data;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>

</style>
