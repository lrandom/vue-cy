<template>
  <div id="app">
    <div v-if="isRender">Content</div>
    <div v-show="isRender">Content</div>
    <button @click="isRender=!isRender">Toggle</button>

    <div v-for="(item,index) in pupils" :key="index">
      {{item}}
    </div>

    <div v-text="content"></div>
    <div v-html="contentHTML"></div>


    <input type="text" v-model="fullName"/>

    <form>
      {{phone}}
      <input type="text" v-model.trim="phone" placeholder="phone"/>
    </form>
    {{fullName}}
    <button @click="changeFullName()">Change FullName</button>

    {{checkBox}}
    <input type="checkbox" value="Hà Nội" v-model="checkBox"/>
    <input type="checkbox" value="Quảng Ninh" v-model="checkBox"/>
    <input type="checkbox" value="Hải Phòng" v-model="checkBox"/>

    <input type="radio" value="Hà Nội" v-model="radioButton">
    <input type="radio" value="Hải Phòng" v-model="radioButton">
    <input type="radio" value="Quảng Ninh" v-model="radioButton">
    {{radioButton}}

    {{select}}
    <select v-model="select">
      <option value="Hà Nội">hà Nội</option>
      <option value="Hải Phòng">HP</option>
      <option value="Quảng Ninh">QN</option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      select:'',
      radioButton:'',
      checkBox:[],
      fullName: '',
      phone:'',
      isRender: false,
      pupils:[
          "Hiếu",
          "Miên",
          "Tiến",
          "Duy"
      ],
      content:"Lorem Ipsum Dolor",
      contentHTML:"<strong>Strong name</strong>"
    }
  },
  mounted() {
  },
  methods:{
    changeFullName() {
      this.fullName = "Nguyễn Thành Nam";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
