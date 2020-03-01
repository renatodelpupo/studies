class TradeController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._tradeList = new Bind(
      new TradeList(),
      new TradeView($('#trade-view')),
      'add', '_erase'
    )

    this._message = new Bind(
      new Message(),
      new MessageView($('#message-view')),
      'text'
    )
  }

  add(event) {
    event.preventDefault()
    this._tradeList.add(this._createTrade())
    this._cleanForm()
    this._message.text = 'Trading successfully added'
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

    Promise.all([
      service.importWeeklyTrades(),
      service.importPreviousTrades(),
      service.importOldTrades()
    ]).then(trades => {
      trades
        .reduce((flatArray, array) => flatArray.concat(array), [])
        .forEach(trade => this._tradeList.add(trade))

        this._message.text = 'Trades imported successfully'
    }).catch(error => this._message.text = error)
  }
}