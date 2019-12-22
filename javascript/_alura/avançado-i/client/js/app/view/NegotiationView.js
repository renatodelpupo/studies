class NegotiationView {

  constructor(element) {
    this._element = element
  }

  _template(negotiationList) {
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
          ${negotiationList.map(negotiation => `
            <tr>
              <td>${DateHelper.dateToString(negotiation.date)}</td>
              <td>${negotiation.amount}</td>
              <td>${negotiation.price}</td>
              <td>${negotiation.subtotal}</td>
            </tr>
            `).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `
  }

  updateNegotiationView(negotiationList) {
    this._element.innerHTML = this._template(negotiationList)
  }

}