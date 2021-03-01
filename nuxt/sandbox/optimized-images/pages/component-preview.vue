<template>
  <div>
    <ResponsiveImage alt="Dinosaur" src="~/assets/dinosaur.png" />

    <div class="divider" />

    <ResponsiveImage alt="Dinosaur 2" src="~/assets/dinosaur2.png" />

    <div class="divider" />

    <ResponsiveImage alt="Dinosaur 3" src="~/assets/dinosaur3.png" />

    <div class="divider" />

    <ResponsiveImage alt="Dinosaur 4" src="~/assets/dinosaur4.png" />

    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: 'ComponentPreview',
}
</script>

<style scoped>
.divider {
  margin-top: 50vh;
}
</style>
