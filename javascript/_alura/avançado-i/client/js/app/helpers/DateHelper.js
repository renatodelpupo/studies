class DateHelper {

  constructor() {
    throw new Error('The class cannot be instantiated')
  }

  static dateToString(date) {
    return `${ date.getDate() }/${ (date.getMonth() + 1) }/${ date.getFullYear() }`
  }

  static stringToDate(texto) {
    return new Date(...texto.split('-').map((item,indice) => item - indice % 2))
  }

}