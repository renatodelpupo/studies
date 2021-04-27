<template>
  <div class="container">
    <!-- Default example -->
    <nuxt-img alt="Default" src="/dinosaur.png" />

    <!-- Lazy loading -->
    <nuxt-img alt="Default" src="/dinosaur.png" loading="lazy" />

    <!-- Quality (Unsuccessful testing) -->
    <nuxt-img alt="Default" quality="80" src="/dinosaur.png" />

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

    <!-- WebP -->
    <nuxt-img alt="WebP" format="webp" src="/dinosaur.png" />

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

    <!-- Full example  -->
    <nuxt-picture
      alt="Full example"
      fit="contain"
      format="webp"
      height="1388"
      loading="lazy"
      quality="80"
      sizes="xs:320px sm:640px md:768px lg:900px"
      src="/dinosaur.png"
      width="1920"
    />
    <!-- Build automatically: -->
    <!--
      <picture>
        <source
          type="image/webp"
          srcset="..."
          sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, 900px"
        >
        <img
          alt="Full example"
          height="1388"
          loading="lazy"
          sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, 900px"
          src="..."
          srcset="..."
          width="1920"
        >
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
