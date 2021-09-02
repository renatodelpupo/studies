const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

// the /start command will execute all bot.start (asynchronous)
bot.start((ctx, next) => {
  const from = ctx.update.message.from

  ctx.reply(`Welcome, ${from.first_name}`)

  console.log(from)

  next()
})

bot.start((ctx) => {
  ctx.reply('How are you doing?')
})

// the text input will execute all bot.on('text')
bot.on('text', async (ctx, next) => {
  await ctx.reply('Mid 1')
  next()
})

bot.on('text', async (ctx, next) => {
  await ctx.reply('Mid 2')
  next()
})

// keep running
bot.startPolling()
