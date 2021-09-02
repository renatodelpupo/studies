const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(async (ctx) => {
  await ctx.reply(`Welcome, ${ctx.update.message.from.first_name}! 😎`)
  await ctx.replyWithHTML(`
    Highlighting <b>HTML</b>
    <i>with</i> <code>rich</code> <pre>formatting</pre>
    <a href="$">Link</a>
  `)
  await ctx.replyWithMarkdown('Highlighting *Markdown*' + ' _with_ `rich` ```formatting```' + ' [Link](#)')
  await ctx.replyWithPhoto({ source: `${__dirname}/cat.jpeg` })
  await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg', { caption: 'Look at this!' })
  await ctx.replyWithPhoto({ url: 'http://files.cod3r.com.br/curso-bot/gato2.jpg' })
  await ctx.replyWithLocation(29.9773008, 31.1303068)
  await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()
