import { MessageView, TradesView } from '../views/index'
import { Trade, Trades } from '../models/index'

export class TradeController {

  private _inputAmount: JQuery
  private _inputDate: JQuery
  private _inputPrice: JQuery
  private _messageView = new MessageView('#messageView')
  private _trades: Trades = new Trades()
  private _tradesView = new TradesView('#tradesView')

  constructor() {
    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')
    this._tradesView.update(this._trades)
  }

  add(event: Event) {
    event.preventDefault()

    const trade = new Trade(
      Number(this._inputAmount.val()),
      new Date(this._inputDate.val().replace(/-/g, '/')),
      Number(this._inputPrice.val())
    )

    this._messageView.update('Trade successfully added')
    this._trades.add(trade)
    this._tradesView.update(this._trades)
  }
}