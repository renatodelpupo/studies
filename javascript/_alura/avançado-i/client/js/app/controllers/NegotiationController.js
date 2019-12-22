class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._negotiationList = new NegotiationList()
    this._negotiationView = new NegotiationView($('#negotiation-view'))
    this._updateNegotiationView()

    this._message = new Message()
    this._messageView = new MessageView($('#message-view'))
  }

  add(event) {
    event.preventDefault()
    this._negotiationList.add(this._createNegotiation())
    this._cleanForm()
    this._updateNegotiationView()

    this._message = 'Successfully added trading'
    this._throwMessageView(this._message)
  }

  _cleanForm() {
    this._inputAmount.value = 1
    this._inputDate.value = ''
    this._inputPrice.value = 0
    this._inputDate.focus()
  }

  _createNegotiation() {
    return new Negotiation(
      this._inputAmount.value,
      DateHelper.stringToDate(this._inputDate.value),
      this._inputPrice.value
    )
  }

  _throwMessageView(message) {
    this._messageView._throw(message)
  }

  _updateNegotiationView() {
    this._negotiationView.updateNegotiationView(this._negotiationList.negotiations)
  }

}