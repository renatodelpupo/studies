class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')
  }

  add(event) {
    event.preventDefault()

    const dateHelper = new DateHelper()

    let negotiation = new Negotiation(
        this._inputAmount.value,
        dateHelper.stringToDate(this._inputDate.value),
        this._inputPrice.value
      )

  }

}