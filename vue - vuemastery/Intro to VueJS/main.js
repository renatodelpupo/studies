var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/img/vmSocks-green.jpg',
    inventory: 3,
    cart: 0,
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
    ]
  },
  methods: {
    addToCart() {
      if (this.inventory >= 1) {
        this.cart++
        this.inventory--
      }
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart--
        this.inventory++
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
  }
})

