<template>
  <div class="container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        <Card :id="pokemon.id" :main-type="pokemon.types[0].type.name">
          <template #image>
            <img alt="" :src="pokemon.sprites.front_default" />
          </template>

          <template #name>{{ pokemon.name }}</template>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import Card from '@/components/atoms/Card/Card.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: { Card },

  async asyncData() {
    const pokemons: Array<any> = []

    const pokemonsPreListGetter = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    const pokemonsPreList = await pokemonsPreListGetter.data.results

    const getPokemonInfo = async (pokemon: any) => {
      const response = await axios.get(pokemon.url)
      pokemons.push(response.data)
    }

    const pokemonInfoGetters = pokemonsPreList.map(getPokemonInfo)
    const pokemonInfo = Promise.all(pokemonInfoGetters)
    await pokemonInfo

    return {
      pokemons: pokemons.sort((a, b) => a.id - b.id)
    }
  }
})
</script>
