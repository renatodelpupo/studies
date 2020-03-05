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

    ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.listAll())
      .then(trades => trades.forEach(trade => this._tradeList.add(trade)))
      .catch(error => {
        console.log(error)
        this._message.text = error
      })
  }

  add(event) {
    event.preventDefault()

    ConnectionFactory
      .getConnection()
      .then(connection => {
        const trade = this._createTrade()
        new TradeDao(connection)
          .add(trade)
          .then(() => {
            this._tradeList.add(trade)
            this._message.text = 'Trade successfully added'
            this._cleanForm()
          })
      }).catch(error => this._message.text = error)
  }

  _cleanForm() {
    this._inputAmount.value = 1
    this._inputDate.value = ''
    this._inputPrice.value = 0
    this._inputDate.focus()
  }

  _cleanTable() {
    ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.eraseAll())
      .then(message => {
        this._message.text = message
        this._tradeList._erase()
      })
  }

  _createTrade() {
    return new Trade(
      Number(this._inputAmount.value),
      DateHelper.stringToDate(this._inputDate.value),
      Number(this._inputPrice.value)
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