class NegotiationList {

  constructor(context, trap) {
    this._context = context
    this._negotiations = []
    this._trap = trap
  }

  add(negotiation) {
    this._negotiations.push(negotiation)
    Reflect.apply(this._trap, this._context, [this])
  }

  get negotiations() {
    return [].concat(this._negotiations);
  }

  _erase() {
    this._negotiations = []
    Reflect.apply(this._trap, this._context, [this])
  }

}