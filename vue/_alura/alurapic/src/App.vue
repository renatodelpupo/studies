
<template>
  <div>
    <meu-menu :rotas="routes" />
    <div class="corpo">
      <transition name="pagina">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  data() {
    return {
      routes: routes.filter(route => !route.menuDisabled)
    };
  },

  components: {
    "meu-menu": Menu
  }
};
</script>

<style lang="scss" scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.5s;
}
</style>
