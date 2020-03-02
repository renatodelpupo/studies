class Message {

  constructor(text = '') {
    this._text = text
  }

  get text() {
    return this._text
  }

  set text(newText) {
    this._text = newText
  }

}