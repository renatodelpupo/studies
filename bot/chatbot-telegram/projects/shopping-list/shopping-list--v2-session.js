const env = require('../../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const bot = new Telegraf(env.token)

const generateButtons = (shoppingList) =>
  Extra.markup(
    Markup.inlineKeyboard(
      shoppingList.map((item) => Markup.callbackButton(item, `delete ${item}`)),
      { columns: 3 }
    )
  )

bot.use(session())

bot.start(async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.reply(`Welcome, ${name}!`)
  await ctx.reply('Start typing your shopping shoppingList...')

  ctx.session.shoppingList = []
})

bot.on('text', (ctx) => {
  let item = ctx.update.message.text

  ctx.session.shoppingList.push(item)
  ctx.reply(`${item} added!`, generateButtons(ctx.session.shoppingList))
})

bot.action(/delete (.+)/, (ctx) => {
  ctx.session.shoppingList = ctx.session.shoppingList.filter((item) => item !== ctx.match[1])
  ctx.reply(`${ctx.match[1]} deleted!`, generateButtons(ctx.session.shoppingList))
})

bot.startPolling()
