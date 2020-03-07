class TradeView extends View {

  template(model) {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th onclick="tradeController.order('date')">Date</th>
            <th onclick="tradeController.order('amount')">Amount</th>
            <th onclick="tradeController.order('price')">Price</th>
            <th onclick="tradeController.order('subtotal')">Subtotal</th>
          </tr>
        </thead>

        <tbody>
          ${model._trades.map(trade => `
            <tr>
              <td>${DateHelper.dateToString(trade.date)}</td>
              <td>${trade.amount}</td>
              <td>${trade.price}</td>
              <td>${trade.subtotal}</td>
            </tr>
            `).join('')}
        </tbody>

        <tfoot>
          <td colspan="3"></td>
          <td>
            ${model.totalLength}
          </td>
        </tfoot>
      </table>
    `
  }

}