class TradeController {

  private _inputAmount: HTMLInputElement
  private _inputDate: HTMLInputElement
  private _inputPrice: HTMLInputElement
  private _messageView = new MessageView('#messageView')
  private _trades: Trades = new Trades()
  private _tradesView = new TradesView('#tradesView')

  constructor() {
    this._inputAmount = <HTMLInputElement>document.querySelector('#amount')
    this._inputDate = <HTMLInputElement>document.querySelector('#date')
    this._inputPrice = <HTMLInputElement>document.querySelector('#price')
    this._tradesView.update(this._trades)
  }

  add(event: Event) {
    event.preventDefault()

    const trade = new Trade(
      Number(this._inputAmount.value),
      new Date(this._inputDate.value.replace(/-/g, '/')),
      Number(this._inputPrice.value)
    )

    this._messageView.update('Trade successfully added')
    this._trades.add(trade)
    this._tradesView.update(this._trades)
  }
}