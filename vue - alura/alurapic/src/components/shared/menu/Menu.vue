<template>
  <nav>
    <ul>
      <li v-for="rota in rotas" :key="rota.path">
        <router-link :to="rota.path || '/'">{{ rota.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
