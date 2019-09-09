
<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in routes" :key="route.path">
          <router-link :to="route.path || '/'">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="corpo">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { routes } from './routes'

export default {

  data() {
    return {
      routes
    }
  }
};
</script>

<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
</style>
