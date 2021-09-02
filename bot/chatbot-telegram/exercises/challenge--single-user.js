const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start((ctx) => {
  const from = ctx.update.message.from

  if (from.id === env.adminId) {
    ctx.reply(`Hi, ${from.first_name}.`)
  } else {
    ctx.reply('Sorry, you are not authorized to access my information.')
  }
})

bot.startPolling()
