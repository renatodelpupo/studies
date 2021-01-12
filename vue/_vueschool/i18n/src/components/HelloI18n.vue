<template>
  <div>
    <p>{{ $t('hello', { name: 'Renato', surname }) }}</p>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('fruits.apple') }}</p>
    <p>{{ $t('goodbye') }}</p>

    <hr>

    <p>0: {{ $tc('car', 0) }}</p>
    <p>1: {{ $tc('car', 1) }}</p>
    <p>2: {{ $tc('car', 2) }}</p>
    <p>3: {{ $tc('car', 3, { n: 'too many' }) }}</p>

    <hr>

    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'short', 'pt-BR') }}</p>

    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $d(new Date(), 'long', 'pt-BR') }}</p>

    <hr>

    <p>{{ product.name }}: {{ $n(product.price, "currency") }}</p>

    <i18n-n :value="1140.71" format="currency">
      <template v-slot:currency="slotProps">
        <span style="color: blue; font-size: 24px; font-weight: bold">{{
          slotProps.currency
        }}</span>
      </template>
      <template v-slot:integer="slotProps">
        <span style="color: navy; font-size: 24px">{{ slotProps.integer }}</span>
      </template>
      <template v-slot:decimal="slotProps">
        <span style="color: red">{{ slotProps.decimal }}</span>
      </template>
      <template v-slot:fraction="slotProps">
        <span style="color: orange">{{ slotProps.fraction }}</span>
      </template>
      <template v-slot:group="slotProps">
        <span style="color: green; font-size: 24px">{{ slotProps.group }}</span>
      </template>
    </i18n-n>

    <hr>

    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('es')">Español</button>
    <button @click="setLocale('pt-BR')">Português</button>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',

  data() {
    return {
      products: {
        'en': {
          name: 'Blue Shirt',
          price: 10
        },
        'es': {
          name: 'Camisa Azul',
          price: 10
        },
        'pt-BR': {
          name: 'Camisa Azul',
          price: 30
        }
      },
      surname: 'Delpupo'
    }
  },

  computed: {
    product() {
      return this.products[this.$i18n.locale]
    }
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    }
  }
}
</script>

<i18n>
{
  "en": {
    "hello": "Hello {name} {surname}"
  },
  "es": {
    "hello": "Hola {name} {surname}!"
  }
}
</i18n>
