<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

      <p class="mensagem">{{ mensagem }}</p>

      <input type="search" class="filtro" @input="termoBusca = $event.target.value" placeholder="digite o título da foto" />
      {{ termoBusca }}

      <ul class="lista-fotos">
        <li class="lista-fotos-item" v-for="foto of fotosFiltradas" :key="foto.titulo">
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="foto.url" :alt="foto.titulo" />
            <router-link :to="{ name: 'edição', params: { id: foto._id } }">
              <meu-botao
                rotulo="editar"
                tipo="button"
              />
            </router-link>
            <meu-botao 
              rotulo="remover" 
              tipo="button" 
              @botaoAtivado="remove(foto)" 
              :confirmacao="true"
              estilo="perigo"
            />
          </meu-painel>
        </li>
      </ul>
    </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

import FotoService from "../../domain/foto/FotoService"

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      fotos: [],
      mensagem: '',
      termoBusca: "",
      titulo: "Alurapic"
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

  methods: {
    remove(foto) {

      this.service
        .apaga(foto._id)
        .then(
          () => {
            this.mensagem = `Foto ${foto.titulo} removida com sucesso`
            let indice = this.fotos.indexOf(foto)
            this.fotos.splice(indice, 1)
          }, 
          err => this.mensagem = err.message
        )
    }
  },

  created() {

    this.service = new FotoService(this.$resource)

    this.service
      .lista()
      .then(fotos => (this.fotos = fotos), err => this.mensagem = err.message);
  }
};
</script>

<style lang="scss" scoped>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;

  .lista-fotos-item {
    display: inline-block;
  }
}

.mensagem {
  text-align: center;

  &:empty {
    display: none;
  }
}
</style>
