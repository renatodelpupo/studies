export class View {

  constructor(element) {
    this._element = element
  }

  template() {
    throw new Error('Template method is required')
  }

  update(model) {
    this._element.innerHTML = this.template(model)
  }
}