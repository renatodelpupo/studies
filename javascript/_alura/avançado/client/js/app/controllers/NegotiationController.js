class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    // this._negotiationList = new NegotiationList(model => this._negotiationView.update(model))

    this._negotiationView = new NegotiationView($('#negotiation-view'))
    this._negotiationView.update(this._negotiationList)

    this._message = new Message()
    this._messageView = new MessageView($('#message-view'))
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