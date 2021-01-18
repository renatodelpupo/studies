<template>
  <li class="Language">
    <span class="Language-button">
      <span class="Language-flag" :class="flagClass" />
      <span class="Language-name" v-text="name" />
    </span>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Language',

  props: {
    flag: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    }
  },

  computed: {
    flagClass() {
      return `Language-flag--${this.flag}`
    }
  }
})
</script>

<style>
.Language {
  display: inline-block;
  min-width: 120px;
}

.Language-button {
  align-items: center;
  display: flex;
  justify-content: center;
  text-decoration: none;
}

.Language-flag {
  background-image: url('https://d35aaqx5ub95lt.cloudfront.net/images/juicy-flag-sprite-8.svg');
  background-size: 40px;
  display: inline-block;
  height: 32px;
  margin-right: 6px;
  width: 40px;
}

.Language-flag--brazil {
  background-position: 0 -289.7561px;
}

.Language-flag--spain {
  background-position: 0 -32.19512px;
}

.Language-name {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
</style>
