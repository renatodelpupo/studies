<template>
  <div class="container">
    <div>
      <!--
        srcSet is the responsive-loader default
        data-srcset is the lazysizes attribute

        if using webp, need <picture> with <source type="image/webp"> and <img> fallback
      -->

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

      <!-- Quality (Unsuccessful testing) -->
      <img
        alt="Quality"
        class="lazyload"
        :data-src="`${require('~/assets/windmill.jpg?quality=10}')}`"
      />

      <!-- Resolution switching: Different sizes -->
      <img
        alt="Windmill"
        class="lazyload"
        sizes="(max-width: 576px) 300px, (max-width: 1200) 600px, 1000px"
        :data-src="differentSizes.src"
        :data-srcset="differentSizes.srcSet"
      />

      <!-- Parameterized size -->
      <img alt="Dino" src="~/assets/dinosaur.png?size=250" />

      <!-- Resolution switching: Same size, different resolutions -->
      <img
        alt="Cloud"
        class="lazyload"
        data-src="~/assets/cloud--640w.jpg"
        :data-srcset="`${require('~/assets/cloud--640w.jpg')}, ${require('~/assets/cloud--1280w.jpg')} 2x`"
      />

      <!-- Art direction -->
      <picture>
        <source
          media="(min-width: 992px)"
          srcset="~/assets/open--desktop.jpg"
        />
        <img alt="Open" class="lazyload" data-src="~/assets/open--mobile.jpg" />
      </picture>
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

.picture,
picture,
source,
img {
  max-width: 100%;
}
</style>
