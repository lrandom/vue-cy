<template>
  <div>
    <ChildComponent>
      <template #slot1>
        I am slot content 1
      </template>

      <template #slot2="{content,title}">
        I am slot content 2
        {{ content }}
        {{title}}
      </template>
    </ChildComponent>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  name: "ParentComponent",
  components: {
    ChildComponent
  }
}
</script>

<style scoped>

</style>
