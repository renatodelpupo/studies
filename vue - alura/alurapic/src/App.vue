<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err))
  },
  data() {
    return {
      msg: "Starting Alurapic",
      fotos: []
    };
  }
};
</script>

<style>
</style>
