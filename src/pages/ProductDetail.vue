<template>
  <div>
    <div>CHi tiết sp</div>
    {{ productId }}
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      productId: 0,
      name: ''
    }
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.name = this.$route.params.name;
  }
}
</script>

<style scoped>

</style>
