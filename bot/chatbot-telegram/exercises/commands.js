const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start((ctx) => {
  const name = ctx.update.message.from.first_name

  ctx.reply(`
    Welcome, ${name}!
    Do you need /help ?
  `)
})

bot.command('help', (ctx) =>
  ctx.reply(`
    /help: Options
    /helpWithHears: Test it!
    /helpGeneric: Test it!
  `)
)

bot.hears('/helpWithHears', (ctx) => ctx.reply('I can do it, but use a real command instead.'))

bot.command('helpGeneric', (ctx) => ctx.reply('Generic response.'))

bot.startPolling()
