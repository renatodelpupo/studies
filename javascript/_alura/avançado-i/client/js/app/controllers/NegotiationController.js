class NegotiationController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')
  }

  add(event) {
    event.preventDefault();

    let negotiation = new Negotiation(
      this._inputAmount.value,
      this._inputPrice.value
    );

  }

}