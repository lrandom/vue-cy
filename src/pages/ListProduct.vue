<template>
   <div>
     <div v-for="(item,index) in [1,2,3,4,5]" :key="index">
       <router-link :to="{name:'detail-product',params:{id:item,slug:'sp'+item}}">{{item}}</router-link>
     </div>
   </div>
</template>

<script>
export default {
  name: "ListProduct"
}
</script>

<style scoped>

</style>
