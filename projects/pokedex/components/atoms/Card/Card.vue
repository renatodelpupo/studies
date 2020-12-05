<template>
  <div class="card" :class="dynamicClass">
    <div class="card-left">
      <div class="image">
        <slot name="image" />
      </div>
    </div>

    <div class="card-right">
      <div class="number">
        <span v-text="number" />
      </div>

      <div class="name">
        <slot name="name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    id: {
      default: 0,
      type: Number
    },
    mainType: {
      default: '',
      type: String
    }
  },

  computed: {
    dynamicClass() {
      return [`background-color-${this.mainType}`]
    },

    number() {
      const paddedNumber = this.id.toString().padStart(3, '0')
      return `Nº${paddedNumber}`
    }
  }
}
</script>

<style scoped>
.background-color-fire {
  background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background-color: #fd7d24;
  color: white;
}

.card {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
}

.card-left {
  display: flex;
}

.card-right {
  display: flex;
  flex-direction: column;
  padding-right: 32px;
}

.name {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}

.number {
  font-size: 14px;
}
</style>
