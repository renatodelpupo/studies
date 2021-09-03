const env = require('../../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const session = require('telegraf/session')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const generateButtons = (shoppingList) =>
  Extra.markup(
    Markup.inlineKeyboard(
      shoppingList.map((item) => Markup.callbackButton(item, `delete ${item}`)),
      { columns: 3 }
    )
  )

bot.use(session())

const verifyUser = (ctx, next) => {
  const validIdItem = ctx.update.message && ctx.update.message.from.id === env.userID
  const validIdCallback = ctx.update.callback_query && ctx.update.callback_query.from.id === env.userID

  if (validIdItem || validIdCallback) {
    next()
  } else {
    ctx.reply('Sorry, you are not authorized to access my information.')
  }
}

const processing = ({ reply }, next) => reply('Processing...').then(() => next())

bot.start(verifyUser, async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.reply(`Welcome, ${name}!`)
  await ctx.reply('Start typing your shopping shoppingList...')

  ctx.session.shoppingList = []
})

bot.on('text', verifyUser, processing, (ctx) => {
  let msg = ctx.update.message.text
  ctx.session.shoppingList.push(msg)
  ctx.reply(`${msg} added!`, generateButtons(ctx.session.shoppingList))
})

bot.action(/delete (.+)/, verifyUser, (ctx) => {
  ctx.session.shoppingList = ctx.session.shoppingList.filter((item) => item !== ctx.match[1])
  ctx.reply(`${ctx.match[1]} deleted!`, generateButtons(ctx.session.shoppingList))
})

bot.startPolling()
