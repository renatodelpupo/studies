const env = require('../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

let count = 0

const buttons = Extra.markup(
  Markup.inlineKeyboard(
    [
      Markup.callbackButton('+1', 'add 1'),
      Markup.callbackButton('+10', 'add 10'),
      Markup.callbackButton('+100', 'add 100'),
      Markup.callbackButton('-1', 'sub 1'),
      Markup.callbackButton('-10', 'sub 10'),
      Markup.callbackButton('-100', 'sub 100'),
      Markup.callbackButton('🔃 Reset', 'reset'),
      Markup.callbackButton('Result', 'result'),
    ],
    { columns: 3 }
  )
)

bot.start(async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.reply(`Welcome, ${name}!`)
  await ctx.reply(`Partial result: ${count}`, buttons)
})

bot.action(/add (\d+)/, (ctx) => {
  count += parseInt(ctx.match[1])
  ctx.reply(`Partial result: ${count}`, buttons)
})

bot.action(/sub (\d+)/, (ctx) => {
  count -= parseInt(ctx.match[1])
  ctx.reply(`Partial result: ${count}`, buttons)
})

bot.action('reset', (ctx) => {
  count = 0
  ctx.reply(`Partial result: ${count}`, buttons)
})

bot.action('result', (ctx) => {
  ctx.answerCbQuery(`Partial result: ${count}`)
})

bot.startPolling()
