<template>
  <div>
    <p>{{ $t('hello', { name: 'Renato', surname }) }}</p>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('fruits.apple') }}</p>
    <p>{{ $t('goodbye') }}</p>

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
