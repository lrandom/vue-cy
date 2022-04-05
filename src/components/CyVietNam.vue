<template>
  <div>{{ hello }} Cy VietNam
    <button @click="hello='hihi'">Change hello text</button>
    {{ title }}
    {{ content }}

    <button @click="_sendData()">Con bo tien</button>

    <button @click="_sendDataViaEventBus()">Send Data via Event Bus</button>
  </div>
</template>

<script>
import EventBus from "../event-bus";
export default {

  data() {
    return {
      hello: "hi"
    }
  },
  //props:['title','content'],
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
      default: 'Make Dai Viet great again'
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
  },
  methods:{
    _sendData() {
      this.$emit('conChoBoTien',500000);
    },
    _sendDataViaEventBus() {
      EventBus.$emit('anhChoTienEm', 50000);
    }
  }
}
</script>

<style scoped>

</style>
