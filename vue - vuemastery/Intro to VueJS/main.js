
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    inventory: 9,
    description: 'A pair of warm, fuzzy socks',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    image: './assets/img/vmSocks-green-onWhite.jpg',
    endereco: 'http://www.wine.com.br'
  }
})
