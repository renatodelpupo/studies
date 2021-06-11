const fs = require('fs')
const path = require('path')

const { countSrtWords, getSubtitle } = require('./functions')

const subtitlePath = path.join(__dirname, '../data/subtitles/subtitle_01.srt')

getSubtitle(subtitlePath)
  .then(countSrtWords)
  .then((result) => {
    fs.writeFileSync('result.json', JSON.stringify(result))
  })

