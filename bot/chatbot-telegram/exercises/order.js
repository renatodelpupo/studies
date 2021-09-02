const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(async (ctx) => {
  ctx.replyWithHTML(`
    <b>Payment confirmed of order #123</b>

    <b>Items:</b>
    1 T-SHIRT RED BOY [12345]
    1 SNEAKER SK8 [23145]

    <b>Address:</b>
    Edifício Carl Hoepcke - Rua Cristóvão Nunes Pires, 98 - Torre Suden, 7º andar - Centro, Florianópolis - SC, 88010-120

    <b>Next step:</b>
    After sending the products, confirm as following example:
    /tracking #123 <i>tracking-code-here</i>
  `)
})

bot.startPolling()
