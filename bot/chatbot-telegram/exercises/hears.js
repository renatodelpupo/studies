const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.hears('pizza', (ctx) => ctx.reply('I love it!'))
bot.hears(['broccoli', 'okra'], (ctx) => ctx.reply('No, ty!'))
bot.hears('👍', (ctx) => ctx.reply('No way 😡'))
bot.hears(/burger/i, (ctx) => ctx.reply('I love it!!'))
bot.hears([/salad/i, /vegetable/i], (ctx) => ctx.reply('No, ty!'))

bot.startPolling()
