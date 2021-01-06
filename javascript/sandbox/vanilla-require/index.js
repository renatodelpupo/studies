const gamesCompanies = require('./array-data.json')
const consoleGenerations = require('./array-object.json')

const formatConsoleGenerations = textArray => {
  let text = ''

  textArray.forEach((item, index) => {
    if (index === 0) {
      text += item
    } else {
      text += `, ${item}`
    }
  })

  return text
}

gamesCompanies.forEach(item => {
  const company = item.name
  const consoleGenerationsString = formatConsoleGenerations(consoleGenerations[company])
  const text = `${company} consoles: ${consoleGenerationsString}`

  console.log(text)
})
