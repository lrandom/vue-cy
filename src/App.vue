<template>
  <div id="app" class="gallery">
    <div v-for="(item,index) in images" :key="index">
      <img @click="selectedImage=item" :src="item"/>
    </div>
    <div class="modal" :class="{'hidden':!selectedImage}">
      <div class="inner-modal">
        <img :src="selectedImage"/>
      </div>
      <button @click="_closeModal()" class="close-btn">Close</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selectedImage: null,
      images: [
        require('./assets/img/1.jpeg'),
        require('./assets/img/2.jpg'),
        'https://images.all-free-download.com/images/graphiclarge/beautiful_natural_scenic_03_hd_picture_166230.jpg'
      ]
    }
  },
  methods: {
    _closeModal() {
      this.selectedImage = null;
    },
    _addEscapeEvent() {
      return (e) => {
        if (e.key === 'Escape') {
          this._closeModal()
        }
      };
    }
  },
  mounted() {
    setTimeout(() => {
      document.addEventListener('keyup',this._addEscapeEvent());
    }, 1000);
  },
  onDestroy() {
    document.removeEventListener('keyup', this._addEscapeEvent());
  },
  components: {}
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

.gallery {
  display: grid;
  grid-template-columns: auto auto auto;
}

.gallery img {
  width: 10rem
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.47);
}

.hidden {
  display: none;
}

.inner-modal {
  position: relative;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
