<template>
  <div id="app">
    <h1 v-text="title" />
    <AppInput :service="promotion" @send="findPromotion()" />
    <AppInput :service="voucher" @send="findVoucher()" />
  </div>
</template>

<script>
import AppInput from './components/input-code/input-code.vue'
import ServicePromotion from './components/input-code/services/promotion'
import ServiceVoucher from './components/input-code/services/voucher'

export default {
  name: 'App',

  components: {
    AppInput
  },

  mixins: [ServicePromotion, ServiceVoucher],

  data: () => ({
    title: 'Component Communication'
  })
}
</script>

<style>
  * {
    font-family: sans-serif;
    font-size: 14px;
  }

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
    margin: 0 0 .5em;
  }
</style>