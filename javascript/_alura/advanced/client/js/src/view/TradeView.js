import { currentInstance } from '../controllers/TradeController'
import { DateHelper } from '../helpers/DateHelper'
import { View } from './View'

export class TradeView extends View {

  constructor(element) {
    super(element)

    element.addEventListener('click', function (event) {
      if (event.target.nodeName == 'TH') {
        currentInstance().order(event.target.textContent.toLowerCase())
      }
    })
  }

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