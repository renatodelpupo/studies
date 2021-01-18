<template>
  <div class="Index">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '../components/organisms/Footer.vue'
import Header from '../components/organisms/Header.vue'
import Home from '../pages/Home.vue'

export default Vue.extend({
  components: { Footer, Home, Header }
})
</script>

<style>
.Index {
  display: flex;
  flex-direction: column;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  background: #fff;
  color: #3c3c3c;
  font: 500 17px/20px sans-serif;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

@media (min-width: 700px) {
  body {
    overflow-x: initial;
    overflow-y: initial;
  }
}

*,
::after,
::before,
button,
button:focus,
input,
textarea {
  box-sizing: inherit;
  font-family: din-round, sans-serif;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 700px) {
  *,
  ::after,
  ::before,
  button,
  button:focus,
  input,
  textarea {
    -webkit-user-select: auto;
    -moz-user-select: auto;
    user-select: auto;
  }
}

[dir='ltr'] {
  text-align: initial;
}

a {
  background-color: transparent;
  text-decoration: none;
}

img {
  border-style: none;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
