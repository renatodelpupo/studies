<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

      <input type="search" class="filtro" @input="termoBusca = $event.target.value" placeholder="digite o título da foto" />
      {{ termoBusca }}

      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosFiltradas" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="foto.url" :alt="foto.titulo" />
          </meu-painel>
        </li>
      </ul>
    </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      termoBusca: ""
    };
  },

  computed: {
    fotosFiltradas() {
      if (this.termoBusca) {
        let expressaoRegular = new RegExp(this.termoBusca.trim(), "i");
        return this.fotos.filter(foto => expressaoRegular.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fotos => (this.fotos = fotos), err => console.log(err));
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}
</style>
