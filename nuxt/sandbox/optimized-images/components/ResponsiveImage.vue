<template>
  <figure class="picture">
    <picture>
      <source :data-srcset="differentSizesWebP.srcSet" type="image/webp" />
      <source :data-srcset="differentSizesOriginal.srcSet" type="image/png" />
      <img :alt="alt" class="lazyload" :data-src="differentSizesOriginal.src" />
    </picture>
  </figure>
</template>

<script>
export default {
  name: 'ResponsiveImage',

  props: {
    alt: {
      default: '',
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
  },

  computed: {
    differentSizesOriginal() {
      return require(`${this.src}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`)
    },

    differentSizesWebP() {
      return require(`${this.src}?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp`)
    },
  },
}
</script>
