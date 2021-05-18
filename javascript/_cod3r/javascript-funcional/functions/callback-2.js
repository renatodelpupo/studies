const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')

const showFileContent = (_, content) => {
  console.log(content.toString())
}

console.log('Start...')
fs.readFile(filePath, showFileContent)
console.log('End.')

console.log('Start sync...')
const content = fs.readFileSync(filePath)
console.log(content.toString())
console.log('End sync.')
