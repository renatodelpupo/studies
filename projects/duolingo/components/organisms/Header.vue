<template>
  <div class="Header">
    <div class="Header-content">
      <a class="Logo-hyperlink" href="/">
        <img alt="Duolingo" class="Logo" src="~/assets/images/logo-white.svg" width="153px" height="36px" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header'
})
</script>

<style>
.Header {
  background-color: #235390;
  display: flex;
}

.Header-content {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1065px;
  padding: 0 24px;
}

.Logo {
  display: block;
  height: 36px;
}

.Logo-hyperlink {
  margin: 18px auto;
}
</style>
