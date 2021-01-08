<template>
  <div>
    <p>{{ $t('hello') }}</p>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('fruits.apple') }}</p>
    <p>{{ $t('goodbye') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloI18n'
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
