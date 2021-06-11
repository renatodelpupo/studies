const fs = require('fs')
const path = require('path')

const { getSubtitle, handleSrtString } = require('./functions')

const subtitlePath = path.join(__dirname, '../data/subtitles/subtitle_01.srt')

getSubtitle(subtitlePath)
  .then(handleSrtString)
  .then((result) => {
    fs.writeFileSync('result.json', JSON.stringify(result))
  })

