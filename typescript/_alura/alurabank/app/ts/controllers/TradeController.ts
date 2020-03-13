import { MessageView, TradesView } from '../views/index'
import { Trade, Trades } from '../models/index'
import { domInject } from '../helpers/decorators/index'

export class TradeController {

  @domInject('#amount')
  private _inputAmount: JQuery

  @domInject('#date')
  private _inputDate: JQuery

  @domInject('#price')
  private _inputPrice: JQuery

  private _messageView = new MessageView('#messageView')
  private _trades: Trades = new Trades()
  private _tradesView = new TradesView('#tradesView')

  constructor() {
    this._tradesView.update(this._trades)
  }

  add(event: Event) {
    event.preventDefault()

    const date = new Date(this._inputDate.val().replace(/-/g, '/'))

    if (!this._isWeekDay(date)) {
      this._messageView.update('Trades available only on weekdays')
      return
    }

    const trade = new Trade(
      Number(this._inputAmount.val()),
      date,
      Number(this._inputPrice.val())
    )

    this._messageView.update('Trade successfully added')
    this._trades.add(trade)
    this._tradesView.update(this._trades)
  }

  private _isWeekDay(date: Date) {
    return date.getDay() != week.saturday && date.getDay() != week.sunday
  }
}

enum week {
  sunday,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday
}