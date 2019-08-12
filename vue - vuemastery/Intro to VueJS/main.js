
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div>
      <div class="product">

        <div class="product-image">
          <img :src="image" />
        </div>

        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inventory >= 3">In Stock</p>
          <p v-else-if="inventory < 3 && inventory > 0">Almost sold out!</p>
          <p v-else class="outOfStock">Out of stock</p>

          <p>Shipping: {{ shipping }}</p>
          <p>Available: {{ inventory }}</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div class="color-box-area">
            <div class="color-box" 
                v-for="(variant, index) in variants"
                :key="variant.variantId"
                :style="{ backgroundColor: variant.variantColor }"
                @click="updateProduct(index)">
            </div>
          </div>

          <div class="button-area">
            <!-- Mesma coisa, em sintaxe diferente: v-on:click ou @click -->
            <button v-on:click="addToCart" :disabled="!inventory" :class="{ disabledButton: !inventory }">Add to cart</button>
            <button @click="removeFromCart" :disabled="!cart" class="removeButton" :class="{ disabledButton: !cart }">Remove from cart</button>
          </div>

          <div class="cart">
            Cart: {{ cartTotal }}
          </div>

        </div>
      </div>

      <div class="cartDetails" :class="{hide: !cartTotal}">
        <h3>Your current cart:</h3>
        <ul>
          <li v-for="variant in variants" :class="{hide: !variant.visibleOnCartDetails}">{{ title + ' ' + variant.variantColor }}: {{ variant.variantCart }}</li>
        </ul>
      </div>

    </div>
  `,
  data() {
    return {
      product: 'Socks',
      brand: 'VM',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      selectedVariant: 0,
      variants: [
        {
          variantId: 2234,
          variantColor: 'Green',
          variantImage: './assets/img/vmSocks-green.jpg',
          variantCart: 0,
          variantInventory: 4,
          visibleOnCartDetails: false
        },
        {
          variantId: 2235,
          variantColor: 'Blue',
          variantImage: './assets/img/vmSocks-blue.jpg',
          variantCart: 0,
          variantInventory: 1,
          visibleOnCartDetails: false
        }
      ]
    }
  },
  methods: {
    addToCart() {
      if (this.variants[this.selectedVariant].variantInventory >= 1) {
        this.variants[this.selectedVariant].variantCart++
        this.variants[this.selectedVariant].variantInventory--
        this.updateCartDetails()
      }
    },
    removeFromCart() {
      if (this.variants[this.selectedVariant].variantCart >= 1) {
        this.variants[this.selectedVariant].variantCart--
        this.variants[this.selectedVariant].variantInventory++
        this.updateCartDetails()
      }
    },
    updateProduct(index) {
      this.selectedVariant = index
    },
    updateCartDetails() {
      if (this.variants[this.selectedVariant].variantCart >= 1) {
        this.variants[this.selectedVariant].visibleOnCartDetails = true
      } else {
        this.variants[this.selectedVariant].visibleOnCartDetails = false
      }
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory() {
      return this.variants[this.selectedVariant].variantInventory
    },
    cart() {
      return this.variants[this.selectedVariant].variantCart
    },
    cartTotal() {
      let allCartsMap = this.variants.map(item => item.variantCart)
      let allCartsReduce = allCartsMap.reduce(((acc, cur) => acc + cur), 0)
      return allCartsReduce
    },
    shipping() {
      //this.premium ? 'Free' : 2.99
      if (this.premium) {
        return 'Free'
      } else {
        return 2.99
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
})

