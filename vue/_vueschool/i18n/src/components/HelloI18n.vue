<template>
  <div>
    <p>{{ $t('hello') }}</p>
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
    "hello": "Hello i18n in SFC!"
  },
  "es": {
    "hello": "Hola!"
  }
}
</i18n>
