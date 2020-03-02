class TradeController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._currentOrder = ''
    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._tradeList = new Bind(
      new TradeList(),
      new TradeView($('#trade-view')),
      'add', '_erase', 'order', 'orderRevert'
    )

    this._message = new Bind(
      new Message(),
      new MessageView($('#message-view')),
      'text'
    )
  }

  add(event) {
    event.preventDefault()

    try {
      this._tradeList.add(this._createTrade())
      this._message.text = 'Trading successfully added'
      this._cleanForm()
    } catch (error) {
      this._message.text = error
    }
  }

  _cleanForm() {
    this._inputAmount.value = 1
    this._inputDate.value = ''
    this._inputPrice.value = 0
    this._inputDate.focus()
  }

  _cleanTable() {
    this._tradeList._erase()
    this._message.text = 'Trading history cleaned'
  }

  _createTrade() {
    return new Trade(
      this._inputAmount.value,
      DateHelper.stringToDate(this._inputDate.value),
      this._inputPrice.value
    )
  }

  importTrades() {
    let service = new TradeService()

    service.importAllTrades().then(trades => {
      trades.forEach(trade => this._tradeList.add(trade))
      this._message.text = 'Trades imported successfully'
    }).catch(error => this._message.text = error)
  }

  order(column) {

    if (this._currentOrder == column) {
      this._tradeList.orderRevert()
    } else {
      this._tradeList.order((a, b) => a[column] - b[column])
    }

    this._currentOrder = column
  }
}