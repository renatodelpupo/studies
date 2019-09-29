<template>
  <img :src="src" :alt="alt" v-meu-transform:scale.transition="1.1">
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
