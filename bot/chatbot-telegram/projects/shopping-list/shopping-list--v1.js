const env = require('../../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

let shoppingList = []

const generateButtons = () =>
  Extra.markup(
    Markup.inlineKeyboard(
      shoppingList.map((item) => Markup.callbackButton(item, `delete ${item}`)),
      { columns: 3 }
    )
  )

bot.start(async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.reply(`Welcome, ${name}!`)
  await ctx.reply('Start typing your shopping shoppingList...')
})

bot.on('text', (ctx) => {
  shoppingList.push(ctx.update.message.text)
  ctx.reply(`${ctx.update.message.text} added!`, generateButtons())
})

bot.action(/delete (.+)/, (ctx) => {
  shoppingList = shoppingList.filter((item) => item !== ctx.match[1])
  ctx.reply(`${ctx.match[1]} deleted!`, generateButtons())
})

bot.startPolling()
