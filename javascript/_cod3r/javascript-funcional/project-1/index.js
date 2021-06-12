const fs = require('fs')

const { countSrtWords, filterSrtFiles, getFilePaths, getFolderFiles, reduceSrts } = require('./functions')

const dataFolder = '../data/subtitles'

getFolderFiles(dataFolder)
  .then(filterSrtFiles)
  .then((srtFiles) => getFilePaths(dataFolder, srtFiles))
  .then(reduceSrts)
  .then(countSrtWords)
  .then((result) => {
    fs.writeFileSync('result.json', JSON.stringify(result))
  })

