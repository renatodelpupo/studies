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
    const pokemonsNotFoundIds = [
      174, 180, 181, 186, 201, 205, 222, 237, 239, 240, 244, 245, 249,
      298, 303, 313, 321, 324, 327, 334, 335, 342, 352, 357, 360, 362, 367, 368, 369, 372, 373, 376, 378, 379, 381, 384,
      409, 410, 411, 417, 433, 439, 443, 444, 445, 448, 455, 457, 463, 465, 468, 469, 472, 474, 479, 480, 483, 484, 485, 487, 488, 489, 490, 491,
      511, 512, 513, 514, 517, 518, 523, 526, 533, 534, 539, 541, 542, 548, 549, 550, 552, 553, 555, 561, 564, 565, 566, 567, 570, 571, 575, 576, 578, 579, 580, 581, 583, 584, 587, 588, 589, 592, 593, 598, 600, 601, 602, 603, 604, 606, 608, 609, 610, 611, 612, 615, 619, 620, 621, 623, 626, 627, 628, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645,
      651, 652, 654, 655, 657, 658, 664, 665, 666, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 685, 686, 687, 688, 689, 690, 691, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707,
      809
    ]

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
          const pokemonSpecieDuplicatedIndex = pokemonSpeciesListTreated.findIndex(
            (pokemonSpecieTreated) => pokemonSpecieTreated[0].name === pokemonSpecie[0].name
          )

          if (pokemonSpecieDuplicatedIndex >= 0) {
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
