<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">optimized-images</h1>

      <!-- Default  -->
      <figure class="picture">
        <picture>
          <source data-srcset="~/assets/dinosaur.png?webp" type="image/webp" />
          <source data-srcset="~/assets/dinosaur.png" type="image/png" />
          <img
            alt="Dinosaur"
            class="lazyload"
            data-src="~/assets/dinosaur.png"
          />
        </picture>
      </figure>

      <!-- Resolution switching: Different sizes -->
      <!--
      <img
        alt="Windmill"
        sizes="(max-width: 576px) 300px, (max-width: 1200) 600px, 1000px"
        src="~/assets/windmill--300.jpg"
        srcset="
          ~/assets/windmill--300w.jpg   300w,
          ~/assets/windmill--600w.jpg   600w,
          ~/assets/windmill--1000w.jpg 1000w
        "
      />
      -->
      <img
        alt="Windmill"
        sizes="(max-width: 576px) 300px, (max-width: 1200) 600px, 1000px"
        :src="differentSizes.src"
        :srcSet="differentSizes.srcSet"
      />

      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const differentSizes = require('~/assets/windmill.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp')

export default {
  data() {
    return { differentSizes }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.picture,
picture,
source,
img {
  max-width: 100%;
}
</style>
