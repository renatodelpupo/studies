const env = require('../.env')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const animals = Markup.keyboard([['🐷', '🐮', '🐑'], ['🐟', '🐙'], ['🐔']])
  .resize()
  .extra()

bot.start(async (ctx) => {
  await ctx.reply(`Welcome, ${ctx.update.message.from.first_name}!`)
  await ctx.reply(`Do you like animals?`, Markup.keyboard(['Yes', 'Sure']).resize().oneTime().extra())
})

bot.hears(['Yes', 'Sure'], async (ctx) => {
  await ctx.reply(`${ctx.match}! I'm too.`)
  await ctx.reply('What is your favorite animal?', animals)
})

bot.hears('🐮', (ctx) => ctx.reply(`It's also my favorite!`))
bot.hears('🐙', (ctx) => ctx.reply('Oh, really?'))
bot.on('text', (ctx) => ctx.reply('Cool!'))

bot.startPolling()
