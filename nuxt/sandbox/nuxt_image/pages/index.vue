<template>
  <div class="container">
    <!-- Default example -->
    <nuxt-img alt="Default" src="/dinosaur.png" />

    <!-- Resolution switching: Different sizes -->
    <nuxt-img
      alt="Different sizes"
      src="/dinosaur.png"
      sizes="sm:300px md:600px lg:1000px"
    />
    <!-- Build automatically: -->
    <!-- <img alt="" sizes="..." src="#" srcset="..." /> -->

    <!-- Parameterized size -->
    <nuxt-img alt="Parameterized size" src="/dinosaur.png" width="250px" />

    <!-- Nuxt Picture with WebP -->
    <nuxt-picture
      alt="Nuxt Picture with WebP"
      format="webp"
      src="/dinosaur.png"
    />
    <!-- Build automatically: -->
    <!--
      <picture>
        <source sizes="..." src="..." type="image/webp" />
        <img alt="" sizes="..." src="#" srcset="..."
      </picture>
    -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
