const env = require('../../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

let data = {}

const generateButtons = (shoppingList) => {
  return Extra.markup(
    Markup.inlineKeyboard(
      shoppingList.map((item) => Markup.callbackButton(item, `delete ${item}`)),
      { columns: 3 }
    )
  )
}

bot.start(async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.reply(`Welcome, ${name}!`)
  await ctx.reply('Start typing your shopping shoppingList...')
})

bot.use((ctx, next) => {
  const chatId = ctx.chat.id
  if (!data.hasOwnProperty(chatId)) data[chatId] = []
  ctx.items = data[chatId]
  next()
})

bot.on('text', (ctx) => {
  let text = ctx.update.message.text

  if (text.startsWith('/')) text = text.substring(1)

  ctx.items.push(text)
  ctx.reply(`${text} added!`, generateButtons(ctx.items))
})

bot.action(/delete (.+)/, (ctx) => {
  const index = ctx.items.indexOf(ctx.match[1])

  if (index >= 0) ctx.items.splice(index, 1)

  ctx.reply(`${ctx.match[1]} deleted!`, generateButtons(ctx.items))
})

bot.startPolling()
