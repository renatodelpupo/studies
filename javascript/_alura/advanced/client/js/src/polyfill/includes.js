if (!Array.prototype.includes) {
  console.log('Array.includes polyfill applied')
  Array.prototype.includes = function (element) {
    return this.indexOf(element) != -1
  }
}