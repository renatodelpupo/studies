<template>
  <img :src="src" :alt="alt">
</template>

<script>
export default {
  props: ["src", "alt"]
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
