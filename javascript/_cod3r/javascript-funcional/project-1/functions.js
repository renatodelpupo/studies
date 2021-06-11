const fs = require('fs')

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

const reduceSrtArray = (srtArray) => {
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
  const orderedArray = convertObjectToDescOrderedArray(object)
  const orderedObject = convertArrayPairToObject(orderedArray)

  return orderedObject
}

const treatSrtString = (srtString) => {
  return handleBackslash(removeEmpties(removePunctuation(removeNumbers(removeXml(srtString)))))
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
  return string.replace(/<.+>.+<\/.+>/g, '')
}

//
// Methods
const getSubtitle = (filePath) => {
  return new Promise((resolve) => {
    fs.readFile(filePath, (_, content) => resolve(content.toString()))
  })
}

const handleSrtString = (srt) => {
  const treatedSrtString = treatSrtString(srt)
  const treatedSrtStringArray = convertSrtStringToArray(treatedSrtString)
  const reducedSrtStringArray = reduceSrtArray(treatedSrtStringArray)
  const orderedSrtStringArray = sortObjectDesc(reducedSrtStringArray)

  return orderedSrtStringArray
}

module.exports = { getSubtitle, handleSrtString }
