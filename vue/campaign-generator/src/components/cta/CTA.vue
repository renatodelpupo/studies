<template>
  <button :disabled="!available">{{ label }}</button>
</template>

<script>
export default {
  props: {
    available: {
      required: true,
      default: false,
      type: Boolean
    }
  },

  computed: {
    label() {
      if (this.available == true) {
        return "Add to cart";
      } else {
        return "Sold out";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 0.5em;
  padding: 7px 14px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: #7fbc44;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
}
</style>
