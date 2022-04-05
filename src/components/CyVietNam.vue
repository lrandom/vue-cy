<template>
  <div>{{ hello }} Cy VietNam
    <button @click="hello='hihi'">Change hello text</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: "hi"
    }
  },
  beforeCreate() {
    console.error("Create CY VietNam component");
  },
  created() {
    console.error("Created CY VietNam component")
  },
  beforeMount() {
    console.error("Before Mounted CY VietNam component")
  },
  mounted() {
    console.error("Mounted Cy VietNam component");
    //DOM API
    setTimeout(() => {

    }, 500);
  },
  beforeUpdate() {
    console.error("Before Update Cy VietNam component");
  },
  updated() {
    console.error("Updated Cy VietNam component");
  },
  beforeDestroy() {
    console.error("Before Destroy");
  },
  destroyed() {
    console.error("Destroy");
  }
}
</script>

<style scoped>

</style>
