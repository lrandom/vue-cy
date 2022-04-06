<template>
  <div>
    <h2>Child Component</h2>
    <div>
      <slot name="slot1">
       Hello. I am Child Component
      </slot>

      <slot name="slot2" :content="content" :showMessage="showMessage" :title="title">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  data: function () {
    return {
      content:'Child Component',
      title:'I am title',
      showMessage:function (){
        alert("HIHI");
      }
    }
  }
}
</script>

<style scoped>

</style>
