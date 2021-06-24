const fs = require('fs')

const { countSrtWords, filterSrtFiles, getFilePaths, getFolderFiles, getSubtitles } = require('./functions')
const { composition } = require('../functional/composition-2')

const dataFolder = '../data/subtitles'

const mostCommonWords = composition(
  getFolderFiles,
  filterSrtFiles,
  (srtFiles) => getFilePaths(dataFolder, srtFiles),
  getSubtitles,
  (subtitles) => subtitles.join(''),
  countSrtWords,
  (result) => {
    fs.writeFileSync('result-composition.json', JSON.stringify(result))
  }
)

mostCommonWords(dataFolder)
