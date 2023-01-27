const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  images: {
    domains: ['media.graphcms.com'],
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
  reactStrictMode: true,
})
