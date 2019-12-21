<template>
  <img :src="src" :alt="alt" v-meu-transform:scale.transition="1.1">
</template>

<script>
import transform from "../../../directives/Transform"

export default {
  props: ["src", "alt"],

  directives: {
    "meu-transform": transform
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
