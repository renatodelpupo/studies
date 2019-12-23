class NegotiationView extends View {

  template(model) {
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
          ${model._negotiations.map(negotiation => `
            <tr>
              <td>${DateHelper.dateToString(negotiation.date)}</td>
              <td>${negotiation.amount}</td>
              <td>${negotiation.price}</td>
              <td>${negotiation.subtotal}</td>
            </tr>
            `).join('')}
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>
            ${model._negotiations.reduce((acc, cur) => acc + cur.subtotal, 0)}
          </td>
        </tfoot>
      </table>
    `
  }

}