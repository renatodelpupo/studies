class TradeController {

  private _inputAmount: HTMLInputElement
  private _inputDate: HTMLInputElement
  private _inputPrice: HTMLInputElement

  constructor() {
    this._inputAmount = <HTMLInputElement>document.querySelector('#amount')
    this._inputDate = <HTMLInputElement>document.querySelector('#date')
    this._inputPrice = <HTMLInputElement>document.querySelector('#price')
  }

  add(event: Event) {
    event.preventDefault()

    const trade = new Trade(
      Number(this._inputAmount.value),
      new Date(this._inputDate.value.replace(/-/g, '/')),
      Number(this._inputPrice.value)
    )

    console.log(trade)
  }
}