const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start((ctx) => {
  const name = ctx.update.message.from.first_name

  ctx.reply(`Welcome, ${name}!`)
})

bot.on('text', (ctx) => ctx.reply(`Text '${ctx.update.message.text}' received successfully!`))

bot.on('location', (ctx) => {
  const location = ctx.update.message.location
  console.log(location)
  ctx.reply(`Alright, you are at ${location.latitude}, ${location.longitude}.`)
})

bot.on('contact', (ctx) => {
  const contact = ctx.update.message.contact
  console.log(contact)
  ctx.reply(`I'll remember ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', (ctx) => {
  const voice = ctx.update.message.voice
  console.log(voice)
  ctx.reply(`Audio received, it has ${voice.duration} seconds`)
})

bot.on('photo', (ctx) => {
  const photo = ctx.update.message.photo
  console.log(photo)
  photo.forEach((ph, i) => {
    ctx.reply(`Photo ${i} has resolution of ${ph.width}x${ph.height}`)
  })
})

bot.on('sticker', (ctx) => {
  const sticker = ctx.update.message.sticker
  console.log(sticker)
  ctx.reply(`You sent ${sticker.emoji} from ${sticker.set_name}`)
})

bot.startPolling()
