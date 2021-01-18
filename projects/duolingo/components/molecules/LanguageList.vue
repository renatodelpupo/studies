<template>
  <ul class="LanguageList">
    <div class="LanguageList-content">
      <Language v-for="language in languages" :key="language.name" :flag="language.flag" :name="language.name" />
    </div>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Language from '../atoms/Language.vue'

export default Vue.extend({
  name: 'LanguageList',

  components: { Language },

  data: () => ({
    languages: [
      {
        flag: 'usa',
        name: 'English'
      },
      {
        flag: 'spain',
        name: 'Español'
      },
      {
        flag: 'brazil',
        name: 'Português'
      }
    ]
  })
})
</script>

<style>
.Language:not(:last-of-type) {
  margin-right: 16px;
}

.LanguageList {
  transition: transform 0.5s ease-in-out;
  width: 900px;
}

.LanguageList-content {
  display: flex;
  justify-content: center;
}
</style>
