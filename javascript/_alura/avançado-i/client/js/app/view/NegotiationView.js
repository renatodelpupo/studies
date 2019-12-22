class NegotiationView {

  constructor(element) {
    this._element = element
  }

  _template() {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `
  }

  updateNegotiationView() {
    this._element.innerHTML = this._template()
  }

}