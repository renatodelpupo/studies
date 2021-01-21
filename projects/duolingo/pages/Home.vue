<template>
  <div class="Home">
    <div class="Home-content">
      <div class="Earth-wrapper">
        <div class="Earth"></div>
      </div>
      <div class="Text-wrapper">
        <h1 class="Text">{{ $t('title') }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home'
})
</script>

<style>
.Home {
  align-items: center;
  background-color: #235390;
  background-image: url('~assets/images/star-pattern.svg');
  display: flex;
  min-height: calc(100vh - 138px);
  max-height: 1080px;
  position: relative;
  z-index: 1;
}

.Home-content {
  align-items: center;
  display: flex;
  margin: 12px auto;
  padding: 40px;
  text-align: center;
}

.Earth {
  background-image: url('~assets/images/earth.svg');
  background-size: auto;
  background-size: 360px;
  height: 360px;
  min-width: 360px;
  width: 360px;
}

.Earth-wrapper {
  max-height: 360px;
}

.Text {
  color: #fff;
  font-size: 32px;
  line-height: 40px;
}

.Text-wrapper {
  margin: auto 48px;
  width: 60%;
}
</style>
