<template>
  <div class="Footer">
    <div class="Footer-content">
      <nav class="Footer-navigation">
        <LanguageList />
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LanguageList from '../molecules/LanguageList.vue'

export default Vue.extend({
  name: 'Footer',

  components: { LanguageList }
})
</script>

<style>
.Footer {
  background: #0a4a82;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
}

.Footer-content {
  display: flex;
  margin: 0 auto;
  width: 1004px;
}

.Footer-navigation {
  margin: 17px auto;
  max-width: 924px;
  position: relative;
  white-space: nowrap;
}
</style>
