const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'data.txt')

const readFile = (path) => {
  return new Promise((resolve) => {
    fs.readFile(path, (err, content) => {
      resolve(content.toString())
    })
  })
}

readFile(filePath)
  .then((raw) => raw.split('\n'))
  .then((array) => array.join(', '))
  .then((string) => console.log(string))
