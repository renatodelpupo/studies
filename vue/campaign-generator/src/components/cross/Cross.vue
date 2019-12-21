<template>
  <div class="product-item">
    <div class="product-display-area">
      <img class="product-image" :src="image" alt="">
      <span class="product-name">{{ displayName }}</span>
    </div>
    <div class="product-shop-area">
      <div class="product-offer">
        <span class="product-price-original">R$ {{ formatMoney(priceOriginal) }}</span>
        <span class="product-price-offer-member">R$ {{ formatMoney(priceMember) }}</span>
      </div>
      <cta :available="available"></cta>
      <span class="product-price-offer-customer">R$ {{ formatMoney(priceCustomer) }}</span>
    </div>
  </div>
</template>

<script>
import CTA from "../cta/CTA";

export default {
  props: {
    image: {
      required: true,
      type: String
    },
    displayName: {
      required: true,
      type: String
    },
    priceOriginal: {
      required: true,
      type: Number
    },
    priceMember: {
      required: true,
      type: Number
    },
    priceCustomer: {
      required: true,
      type: Number
    },
    available: {
      required: true,
      type: Boolean
    }
  },

  components: {
    cta: CTA
  },

  methods: {
    formatMoney(input) {
      return input.toFixed(2).replace(".", ",");
    }
  }
};
</script>

<style lang="scss" scoped>
.product-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
  width: 250px;
}
.product-display-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.product-name {
  margin: 0.5em 0;
  width: 100%;
  font-weight: bold;
}
.product-shop-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.product-offer {
  text-align: center;
  font-weight: bold;
}
.product-price-original {
  font-size: 0.8em;
}
.product-price-offer-customer {
  text-align: center;
  font-size: 0.7em;
}
</style>
