class MessageView {

  constructor(element) {
    this._element = element
  }

  _template(message) {
    return `<p class="alert alert-info">${message}</p>`
  }

  _throw(message) {
    this._element.innerHTML = this._template(message)
  }
}