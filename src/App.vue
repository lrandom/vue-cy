<template>
  <div id="app">
    <h2>List Products</h2>
    <div v-for="(productItem,productIndex) in products" :key="productIndex">
      <img :src="productItem.image" :alt="productItem.name">
      <h3>{{ productItem.name }}</h3>
      <div>{{ productItem.price }}</div>
      <div v-if="productItem.price>=maxPrice">Expensive</div>
      <div v-else>Cheap</div>
    </div>

    <h2>Hot Products</h2>
    <div v-for="(productItem,productIndex) in hotProducts" :key="productIndex">
      <img :src="productItem.image" :alt="productItem.name">
      <h3>{{ productItem.name }}</h3>
      <div>{{ productItem.price }}</div>
    </div>

    <p>Payment Methods</p>
    <div v-for="(paymentItem,paymentIndex) in paymentMethods" :key="paymentIndex">
      <label>
        <span>{{ paymentItem.text }}</span>
        <input type="radio" :id="paymentItem.value" v-model="selectPaymentMethod" :value="paymentItem.value">
      </label>


    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      selectPaymentMethod: 2,
      cart: [],
      products: [
        {
          id: 1,
          name: "PS5",
          price: 5555,
          publicDate: "05-05-2021",
          image:
              "https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg",
          hot: true,
        },
        {
          id: 2,
          name: "PS4",
          price: 4444,
          publicDate: "04-04-2021",
          image:
              "https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
          hot: true,
        },
        {
          id: 3,
          name: "PS3",
          price: 3333,
          publicDate: "03-03-2021",
          image:
              "https://game.haloshop.vn/image/catalog/blogs/ps3-co-con-dang-mua/ps3-co-con-dang-mua-21.jpg",
          hot: false,
        },
      ],
      paymentMethods: [
        {text: "COD", value: 1},
        {text: "Banking", value: 2},
        {text: "Ứng dụng bên thứ 3", value: 3},
      ],
      selectedPayment: 2,
    };
  },
  computed: {
    hotProducts() {
      return this.products.filter(productItem => productItem.hot)
    },
    maxPrice() {
      return Math.max(...this.products.map(productItem => productItem.price));
    }
  },
  watch:{
    selectPaymentMethod(newVal,oldVal) {
      if (newVal != oldVal) {
        alert("You are changed payment method");
      }
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
