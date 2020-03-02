class DateHelper {

  constructor() {
    throw new Error('The class cannot be instantiated')
  }

  static dateToString(date) {
    return `${ date.getDate() }/${ date.getMonth() + 1 }/${ date.getFullYear() }`
  }

  static stringToDate(text) {

    if (/\d{2}\/\d{2}\/\d{4}/.test(text)) {
      return new Date(...text.split('/').reverse().map((item, index) => item - index % 2))
    } else {
      throw new Error('Date must be in the format DD-MM-YYYY')
    }
  }
}