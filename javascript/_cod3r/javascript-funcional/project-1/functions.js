const fs = require('fs')
const path = require('path')

//
// Conversions
const convertSrtStringToArray = (srtString) => {
  return srtString.toLowerCase().replace(/\n/g, ' ').split(' ')
}

const convertArrayPairToObject = (array) => {
  const result = array.reduce(
    (result, [key, value]) => ({
      ...result,
      [key]: value,
    }),
    {}
  )

  return result
}

const convertObjectToDescOrderedArray = (object) => {
  const result = Object.entries(object).sort((a, b) => {
    return b[1] - a[1]
  })

  return result
}

const convertToUniqueObject = (srtArray) => {
  return srtArray.reduce((acc, cur) => {
    if (Object.keys(acc).includes(cur)) {
      acc[cur] += 1
    } else {
      acc[cur] = 1
    }

    return acc
  }, {})
}

const sortObjectDesc = (object) => {
  return new Promise((resolve) => resolve(convertObjectToDescOrderedArray(object))).then(convertArrayPairToObject)
}

const treatSrtString = (srtString) => {
  return new Promise((resolve) => resolve(removeXml(srtString)))
    .then(removeNumbers)
    .then(removePunctuation)
    .then(removeEmpties)
    .then(handleBackslash)
}

//
// String treatments
const handleBackslash = (string) => {
  return string.replace(/\\/g, ' \\ ')
}

const removeEmpties = (string) => {
  return string.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '')
}

const removeNumbers = (string) => {
  return string.replace(/[0-9]+/g, '')
}

const removePunctuation = (string) => {
  return string.replace(/[:,->_"!?]/g, '')
}

const removeXml = (string) => {
  return string.replace(/<.*?>/g, '')
}

//
// Methods
const countSrtWords = (srt) => {
  return new Promise((resolve) => resolve(treatSrtString(srt)))
    .then(convertSrtStringToArray)
    .then(convertToUniqueObject)
    .then(sortObjectDesc)
}

const filterSrtFiles = (filesArray) => {
  return filesArray.filter((file) => file.endsWith('.srt'))
}

const getFilePaths = (folderPath, fileNames) => {
  return fileNames.map((fileName) => `${folderPath}/${fileName}`)
}

const getFolderFiles = (folderPath) => {
  return new Promise((resolve) => {
    const folderFiles = fs.readdirSync(folderPath)
    resolve(folderFiles)

    // fs.readdir(folderPath, (err, content) => {
    //   resolve(content)
    // })
  })
}

const getSubtitle = (filePath) => {
  return new Promise((resolve) => {
    fs.readFile(filePath, (_, content) => resolve(content.toString()))
  })
}

const getSubtitles = (filePaths) => {
  return Promise.all(filePaths.map((filePath) => getSubtitle(path.join(__dirname, filePath))))
}

// const reduceSrts = (srtFiles) => {
//   return new Promise((resolve) => {
//     let reducedString = ''

//     srtFiles
//       .reduce((accumulatorPromise, currentSrtFile) => {
//         return accumulatorPromise.then(() => {
//           return getSubtitle(path.join(__dirname, currentSrtFile)).then((newSrt) => {
//             reducedString = reducedString.concat(newSrt)
//           })
//         })
//       }, Promise.resolve())
//       .then(() => {
//         return resolve(reducedString)
//       })
//   })
// }

module.exports = { countSrtWords, filterSrtFiles, getFilePaths, getFolderFiles, getSubtitles }
