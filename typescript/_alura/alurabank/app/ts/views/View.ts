class View<T> {

  private _element: Element

  constructor(selector: string) {
    this._element = document.querySelector(selector)
  }

  template(model: T): string {
    throw new Error('You must implement the template method')
  }

  update(model: T) {
    this._element.innerHTML = this.template(model)
  }
}