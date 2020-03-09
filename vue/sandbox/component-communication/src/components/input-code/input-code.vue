<template>
  <div>
    <div v-if="showBoxBlank" class="box box-default">
      <h2 v-text="service.inputLabel" />
      <div class="input-area">
        <input :label="service.inputLabel" v-model="service.inputValue" />
        <button @click="confirm()" :disabled="!sendConditions">Send</button>
      </div>
    </div>
    <div v-else-if="showBoxSuccess" class="box box-success">
      <h2 v-text="service.messages.success" />
      <div class="success-area">
        <span>Coupon: {{ service.inputValue }}</span>
        <button @click="remove()">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    service: {
      required: true
    }
  },

  data: () => ({
    inputValue: null
  }),

  computed: {
    sendConditions() {
      return !!this.service.inputValue
    },

    showBoxBlank() {
      return this.service.status === 'blank'
    },

    showBoxSuccess() {
      return this.service.status === 'success'
    }
  },

  methods: {
    confirm() {
      this.$emit('send')
    },
    remove() {
      this.service.status = 'blank'
    }
  }
}
</script>

<style scoped>
button {
  background-color: white;
  border-radius: 5px;
  border: 1px solid #bbbbbb;
  padding: 5px 10px;
}

.box {
  border-radius: 5px;
  margin: 10px auto;
  padding: 15px;
}

.box-default {
  background-color: #eaeaea;
}

.box-success {
  background-color: #a2cd64;
  color: white;
}

.input-area {
  display: flex;
}

.input-area button,
.success-area button {
  margin-left: 5px;
}
</style>