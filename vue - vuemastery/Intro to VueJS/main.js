var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/img/vmSocks-green.jpg',
    inStock: true,
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
      this.cart++
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart--
      }
    }
  }
})

