import { View } from './View'
import { Trades } from '../models/index'

export class TradesView extends View<Trades> {

  template(model: Trades): string {

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
        ${model.toArray().map(trade => `
          <tr>
            <td>${trade.date.getDate()}/${trade.date.getMonth() + 1}/${trade.date.getFullYear()}</td>
            <td>${trade.amount}</td>
            <td>${trade.price}</td>
            <td>${trade.subtotal}</td>
          </tr>
        `).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
      `
  }
}