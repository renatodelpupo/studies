<template>
  <div class="container">
    <ul>
      <li>
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
    let pokemon: Array<any> = []

    await axios.get('https://pokeapi.co/api/v2/pokemon/4/').then((response) => {
      pokemon = response.data
    })

    return {
      pokemon
    }
  }
})
</script>
