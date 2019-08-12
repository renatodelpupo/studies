var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/img/vmSocks-green.jpg',
    inStock: true,
    inventory: 3,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/img/vmSocks-green.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/img/vmSocks-blue.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      if (this.inventory >= 1) {
        this.cart++
        this.inventory--
      }
      this.updateStock()
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart--
        this.inventory++
      }
      this.updateStock()
    },
    updateStock() {
      if (this.inventory >= 1) {
        this.inStock = true
      } else {
        this.inStock = false
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
  }
})

