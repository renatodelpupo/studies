<template>
  <div>
    <p>{{ $t('hello', { name: 'Renato', surname }) }}</p>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('fruits.apple') }}</p>
    <p>{{ $t('goodbye') }}</p>

    <p>0: {{ $tc('car', 0) }}</p>
    <p>1: {{ $tc('car', 1) }}</p>
    <p>2: {{ $tc('car', 2) }}</p>
    <p>3: {{ $tc('car', 3, { n: 'too many' }) }}</p>

    <button @click="setLocale('en')">English</button>
    <button @click="setLocale('es')">Español</button>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n',

  data() {
    return {
      surname: 'Delpupo'
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
