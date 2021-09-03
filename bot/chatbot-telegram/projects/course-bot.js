const axios = require('axios')
const env = require('../.env')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

const optionsKeyboard = Markup.keyboard([
  ['What are bots?', 'What will I see in the course?'],
  ['Can I really automate tasks?'],
  ['How to buy the course?'],
])
  .resize()
  .extra()

const generateButtons = Extra.markup(
  Markup.inlineKeyboard([Markup.callbackButton('Yes', 'y'), Markup.callbackButton('No', 'n')], { columns: 2 })
)

const location = Markup.keyboard([Markup.locationRequestButton('Click here to submit your location')])
  .resize()
  .oneTime()
  .extra()

bot.start(async (ctx) => {
  const name = ctx.update.message.from.first_name

  await ctx.replyWithMarkdown(`Hi, ${name}! I'm the course chatbot.`)
  await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/bot.png')
  await ctx.replyWithMarkdown('Can I help you?', optionsKeyboard)
})

bot.hears('What are bots?', (ctx) => {
  ctx.replyWithMarkdown('Bots are bla bla bla... Anything else?', optionsKeyboard)
})

bot.hears('What will I see in the course?', async (ctx) => {
  await ctx.replyWithMarkdown('The course have three projects:')
  await ctx.reply('1. A shopping list bot')
  await ctx.reply('2. An event manager bot')
  await ctx.reply('3. And me!')
  await ctx.replyWithMarkdown('Anything else?', optionsKeyboard)
})

bot.hears('Can I really automate tasks?', async (ctx) => {
  await ctx.replyWithMarkdown(`Yes, of course! Let's do it?`, generateButtons)
})

bot.hears('How to buy the course?', (ctx) => {
  ctx.replyWithMarkdown('Please visit the [Cod3r website](https://www.cod3r.com.br/).', optionsKeyboard)
})

bot.action('n', (ctx) => {
  ctx.reply('Ok :(', optionsKeyboard)
})

bot.action('y', async (ctx) => {
  await ctx.reply(`Nice! Send me your location or write something else!`, location)
})

bot.hears(/something else/i, (ctx) => {
  ctx.reply('Ha-ha, very funny...', optionsKeyboard)
})

bot.on('text', async (ctx) => {
  let msg = ctx.message.text
  msg = msg.split('').reverse().join('')

  await ctx.reply(`Your reverted message is: ${msg}`)
  await ctx.reply('Nice, huh?', optionsKeyboard)
})

bot.on('location', async (ctx) => {
  try {
    const url = 'http://api.openweathermap.org/data/2.5/weather'
    const { latitude: lat, longitude: lon } = ctx.message.location
    const res = await axios.get(`${url}?lat=${lat}&lon=${lon}&APPID=d1511249e345599ff0559312d64c15ad&units=metric`)

    await ctx.reply(`Hmm... You are at ${res.data.name}`)
    await ctx.reply(`The weather there is ${res.data.main.temp}°C`, optionsKeyboard)
  } catch (e) {
    ctx.reply(`I couldn't get your location :(`, optionsKeyboard)
  }
})

bot.startPolling()
