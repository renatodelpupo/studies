import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const numberFormats = {
  'en': {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  'pt-BR': {
    currency: {
      style: 'currency',
      currency: 'BRL'
    }
  }
}

const setDateTimeFormats = {
  long: {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric'
  },
  short: {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }
}

const dateTimeFormats = {
  'en': setDateTimeFormats,
  'es': setDateTimeFormats,
  'pt-BR': setDateTimeFormats
}

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  dateTimeFormats,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
  numberFormats
})
