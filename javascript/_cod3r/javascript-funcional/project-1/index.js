const fs = require('fs')

const { countSrtWords, filterSrtFiles, getFilePaths, getFolderFiles, getSubtitles } = require('./functions')

const dataFolder = '../data/subtitles'

getFolderFiles(dataFolder)
  .then(filterSrtFiles)
  .then((srtFiles) => getFilePaths(dataFolder, srtFiles))
  .then(getSubtitles)
  .then((subtitles) => subtitles.join(''))
  .then(countSrtWords)
  .then((result) => {
    fs.writeFileSync('result.json', JSON.stringify(result))
  })

