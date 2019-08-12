var app = new Vue({
  el: '#app',
  data: {
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
    }
  }
})

