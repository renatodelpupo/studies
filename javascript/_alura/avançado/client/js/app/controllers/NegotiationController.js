class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._negotiationList = new Bind(
      new NegotiationList(),
      new NegotiationView($('#negotiation-view')),
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
    this._negotiationList.add(this._createNegotiation())
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
    this._negotiationList._erase()
    this._message.text = 'Trading history cleaned'
  }

  _createNegotiation() {
    return new Negotiation(
      this._inputAmount.value,
      DateHelper.stringToDate(this._inputDate.value),
      this._inputPrice.value
    )
  }

  importTrades() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'trades/week')
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const responseText = JSON.parse(xhr.responseText)
          const trades = responseText.map(object => new Negotiation(object.amount, new Date(object.date), object.price))
          trades.forEach(negotiation => this._negotiationList.add(negotiation))

          this._message.text = 'Trades imported successfully'
        } else {
          console.log(xhr.responseText)
          this._message.text = 'Trades import failed'
        }
      }
    }
    xhr.send()
  }
}