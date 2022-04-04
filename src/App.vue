<template>
  <div class="wrapper">
    <div class="products">
      <div v-for="(productItem,productIndex) in transformProducts" :key="productIndex" class="product-item">
        <img :src="productItem.thumb" style="width: 180px;height: 200px" :alt="productItem.name">
        <h3>{{ productItem.name }}</h3>
        <div>{{ productItem.price }}</div>
        <div>{{ productItem.description }}</div>
        <div>
          colors:
          <span role="button" v-for="(colorItem,colorIndex) in productItem.colors" :key="colorIndex"
                :style="{backgroundColor: colorItem.code}"
                @mouseenter="changeImageProduct(productItem.id,colorItem.thumb)"
                @mouseleave="resetImageProduct(productItem.id)"
                @click="colorItemClick(productItem.id,colorItem)"
                class="color-item">
        </span>
        </div>
        <div>
          {{ productItem.disableAddToCartButton }}
          <button @click="addToCart(productItem)" role="button" :disabled="productItem.disableAddToCartButton">Add To
            Cart
          </button>
        </div>
      </div>
    </div>

    <div class="cart">

    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      thumbOfProductHoverColor: '',
      selectedColor: null,
      transformProducts: [],
      products: [{
        thumb: "http://placeimg.com/640/480",
        name: "Fantastic Fresh Hat",
        description: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        price: 151,
        id: 1,
        hot: false,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 0,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'
        }, {
          name: "White",
          code: "#ffffff",
          quantity: 4,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'
        }],
        count: 0
      }, {
        thumb: "http://placeimg.com/640/480",
        name: "Gorgeous Fresh Bike",
        description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        price: 288,
        id: 2,
        hot: true,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 2,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

        },
          {
            name: "White",
            code: "#ffffff",
            quantity: 4,
            thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

          }
        ],
        count: 0
      }, {
        thumb: "http://placeimg.com/640/480",
        name: "Intelligent Wooden Shirt",
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        price: 343,
        id: 3,
        hot: true,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 2,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

        },
          {
            name: "White",
            code: "#ffffff",
            quantity: 4,
            thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

          }
        ],
        count: 0
      }, {
        thumb: "http://placeimg.com/640/480",
        name: "Intelligent Plastic Salad",
        description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        price: "753.00",
        id: 4,
        hot: true,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 2,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

        },
          {
            name: "White",
            code: "#ffffff",
            quantity: 4,
            thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

          }
        ],
        count: 0
      }, {
        thumb: "http://placeimg.com/640/480",
        name: "Rustic Steel Bike",
        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        price: 988,
        id: 5,
        hot: false,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 2,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

        },
          {
            name: "White",
            code: "#ffffff",
            quantity: 4,
            thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

          }
        ],
        count: 0

      }, {
        thumb: "http://placeimg.com/640/480",
        name: "Awesome Steel Ball",
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        price: 642,
        id: 6,
        hot: true,
        brand: "Nike",
        release: "2018-01-01",
        colors: [{
          name: "Black",
          code: "#000000",
          quantity: 2,
          thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

        },
          {
            name: "White",
            code: "#ffffff",
            quantity: 4,
            thumb: 'https://d1ka0itfguscri.cloudfront.net/U0QN/2022/01/04/22/53/c3Vf3MVo2Vi/thumb_45764.jpg'

          }
        ],
        count: 0
      }]//end products
    }
  },
  mounted() {
    this.transformProducts = this.products.map((item) => {
      item.disableAddToCartButton = false;
      return item;
    })
  },
  methods: {
    colorItemClick(productId, colorItem) {
      this.selectedColor = colorItem;
      this.transformProducts = this.transformProducts.map(productItem => {
        if (productId == productItem.id && colorItem.quantity <= 0) {
          productItem.disableAddToCartButton = true;
          console.log(productItem);
        } else {
          productItem.disableAddToCartButton = false;
        }
        return productItem;
      })
    },
    changeImageProduct(productId, thumbOfColorVariant) {
      this.transformProducts = this.transformProducts.map(productItem => {
        if (productId == productItem.id) {
          this.thumbOfProductHoverColor = productItem.thumb;
          productItem.thumb = thumbOfColorVariant;
        }
        return productItem;
      })
    },
    resetImageProduct(productId) {
      this.transformProducts = this.transformProducts.map(productItem => {
        if (productId == productItem.id) {
          productItem.thumb = this.thumbOfProductHoverColor;
          this.thumbOfProductHoverColor = '';
        }
        return productItem;
      })
    },
    addToCart(productItem) {
      const _addToCart = (cart, productItem) => {
        cart.push({
          productItem,
          quantity: 1,
          colorItem:this.selectedColor
        })
      }
      let cart = localStorage.getItem("cart");
      if (!cart) {
        cart = [];
        _addToCart(cart, productItem);
      } else {
        /*
        {
           productItem,
           quantity:1,
           colorItem
        }
        * */
        cart = JSON.parse(cart);
        const findIndex = cart.findIndex(item => item?.productItem.id == productItem.id);
        if (findIndex > -1) {
          //tăng số lượng
          cart.find(item => item.productItem.id == productItem.id).quantity++;
        } else {
          //sp chưa có trong giỏ hàng
          _addToCart(cart, productItem);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  },
}
</script>

<style>
.wrapper .product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  border: #00b894 1px solid;
  margin: 5px;
  padding: 5px;
}

.wrapper .product .image-inner,
.list-to-buy .product .image-inner {
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 1rem 0;
}

.wrapper .product .image-inner img,
.list-to-buy .product .image-inner img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

li {
  list-style: none;
}

.wrapper .product .content-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 60%;
  padding-right: 20%;
}

.wrapper .product .add-to-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
}

.wrapper .product .add-to-cart button {
  background-color: #00b894;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  height: 80px;
}

ul {
  list-style: none;
  border: #00b894 1px solid;
}

.total {
  display: flex;
  justify-content: space-between;
}

.color-item {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  border: 2px solid #cccc;
}

.product-item {
  margin-top: 10px
}
</style>
