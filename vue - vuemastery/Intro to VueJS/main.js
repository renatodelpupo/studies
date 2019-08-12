var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'VM',
    cart: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    selectedVariant: 0,
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/img/vmSocks-green.jpg',
        variantQuantity: 4
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/img/vmSocks-blue.jpg',
        variantQuantity: 0
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
    updateProduct(index) {
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})

