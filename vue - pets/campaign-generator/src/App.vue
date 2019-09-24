<template>
  <div id="app">
    <h1>Campaign Generator</h1>

    <div class="product-list">
      <cross 
        v-for="campaignSku in campaignSkus" 
        :key="campaignSku.storeProduct.uidPk"
        :image="renderImage(campaignSku.storeProduct.code)"
        :displayName="campaignSku.storeProduct.displayName"
        :priceOriginal="campaignSku.precoDe"
        :priceMember="campaignSku.precoClubeW"
        :priceCustomer="campaignSku.precoPor"
        :available="campaignSku.compravel"
      ></cross>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Cross from "./components/cross/Cross";

export default {
  name: "app",

  data() {
    return {
      campaignSkus: {}
    };
  },

  beforeMount() {
    axios
      .get("../data/skus.json")
      .then(response => (this.campaignSkus = response.data));
  },

  components: {
    cross: Cross
  },

  methods: {
    renderImage(sku) {
      return `https://www.wine.com.br/renderImage.image?imageName=produtos/${sku}-01.png&padding=0&height=240`
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
#app {
  font-family: sans-serif;
}
.product-list {
  display: flex;
  flex-wrap: nowrap;
}
</style>
