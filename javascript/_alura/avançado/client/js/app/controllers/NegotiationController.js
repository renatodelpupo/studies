class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._negotiationView = new NegotiationView($('#negotiation-view'))
    this._negotiationList = new Bind(
      new NegotiationList(),
      ['add', '_erase'],
      this._negotiationView
    )

    this._messageView = new MessageView($('#message-view'))
    this._message = new Bind(
      new Message(),
      ['text'],
      this._messageView
    )
  }

  add(event) {
    event.preventDefault()
    this._negotiationList.add(this._createNegotiation())
    this._cleanForm()

    this._message = 'Trading successfully added'
    this._throwMessageView(this._message)
  }

  _cleanForm() {
    this._inputAmount.value = 1
    this._inputDate.value = ''
    this._inputPrice.value = 0
    this._inputDate.focus()
  }

  _cleanTable() {
    this._negotiationList._erase()

    this._message = 'Trading history cleaned'
    this._throwMessageView(this._message)
  }

  _createNegotiation() {
    return new Negotiation(
      this._inputAmount.value,
      DateHelper.stringToDate(this._inputDate.value),
      this._inputPrice.value
    )
  }

  _throwMessageView(message) {
    this._messageView.update(message)
  }

}