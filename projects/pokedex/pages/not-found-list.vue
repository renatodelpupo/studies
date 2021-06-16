<template>
  <div class="container">
    <ul>
      <li v-for="pokemonSpecie in pokemonSpeciesList" :key="pokemonSpecie[0].name">
        <Card
          v-for="pokemon in pokemonSpecie"
          :id="pokemon.id"
          :key="pokemon.name"
          :main-type="pokemon.types && pokemon.types[0].type.name"
        >
          <template #image>
            <img alt="" :src="pokemon.sprites && pokemon.sprites.front_default" />
          </template>

          <template #name>{{ pokemon.name }}</template>
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/atoms/Card/Card.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  components: { Card },

  async asyncData() {
    const pokemonsNotFoundIds = [174, 180, 181, 186, 201, 205, 222, 232, 237, 239, 240, 244, 245, 249]

    const getPokemon = (pokemonId) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => response.json())
    }

    const getPokemonAncestor = (pokemonId) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        .then((response) => response.json())
        .then((pokemon) => {
          const evolvesFrom = pokemon.evolves_from_species
          return evolvesFrom ? getPokemonAncestor(evolvesFrom.name) : pokemon
        })
        .then((pokemon) => {
          return pokemon.id !== pokemonId ? getPokemon(pokemon.id) : null
        })
    }

    const getPokemonWithAncestor = (id) => {
      return Promise.all([getPokemonAncestor(id), getPokemon(id)]).then((pokemonsSpecie) =>
        pokemonsSpecie.filter(Boolean)
      )
    }

    const pokemonSpeciesList = await Promise.all(pokemonsNotFoundIds.map(getPokemonWithAncestor)).then(
      (pokemonSpeciesList) => {
        const pokemonSpeciesListTreated = []

        pokemonSpeciesList.forEach((pokemonSpecie) => {
          let pokemonSpecieDuplicatedIndex = null

          const pokemonSpecieDuplicated = pokemonSpeciesListTreated.find((pokemonSpecieTreated, index) => {
            if (pokemonSpecieTreated[0].name === pokemonSpecie[0].name) {
              pokemonSpecieDuplicatedIndex = index
              return true
            }

            return false
          })

          if (pokemonSpecieDuplicated) {
            pokemonSpeciesListTreated[pokemonSpecieDuplicatedIndex].push(pokemonSpecie[1])
          } else {
            pokemonSpeciesListTreated.push(pokemonSpecie)
          }
        })

        return pokemonSpeciesListTreated
      }
    )

    return {
      pokemonSpeciesList
    }
  }
})
</script>

<style scoped>
li {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}
</style>
