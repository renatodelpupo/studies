<template>
  <img :src="src" :alt="alt" v-meu-transform.transition="30">
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
