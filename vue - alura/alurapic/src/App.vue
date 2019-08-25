<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.src" :alt="foto.alt" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Starting Alurapic",
      fotos: [
        {
          src:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It",
          alt: "Happy dog"
        },
        {
          src:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It",
          alt: "Happy dog"
        }
      ]
    };
  }
};
</script>

<style>
</style>
