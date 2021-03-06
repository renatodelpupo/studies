import { logExecutionTime } from '../helpers/decorators/index'

export abstract class View<T> {

  protected _element: JQuery
  private _escape: boolean

  constructor(selector: string, escape: boolean = false) {
    this._element = $(selector)
    this._escape = escape
  }

  abstract template(model: T): string

  @logExecutionTime(true)
  update(model: T) {
    let template = this.template(model)

    if (this._escape) template = template.replace(/<script>[\s\S]*?<\/script>/, '')

    this._element.html(this.template(model))
  }
}