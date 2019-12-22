class DateHelper {

  dateToString(date) {
    return `${ date.getDate() }/${ (date.getMonth() + 1) }/${ date.getFullYear() }`
  }

  stringToDate(texto) {
    return new Date(...texto.split('-').map((item,indice) => item - indice % 2))
  }

}