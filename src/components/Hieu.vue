<template>
   <div>Hiếu</div>
</template>

<script>
import EventBus from "../event-bus";
export default {
  name: "Hieu",
  mounted() {
    EventBus.$on('anhChoTienEm',(money)=>{
      alert("Hiếu đã nhận đc" + money);
    })
  }
}
</script>

<style scoped>

</style>
