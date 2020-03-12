import { Trade } from './Trade'
import { logExecutionTime } from '../helpers/decorators/index'

export class Trades {

  private _trades: Trade[] = []

  add(trade: Trade) {
    this._trades.push(trade)
  }

  toArray(): Trade[] {
    return ([] as Trade[]).concat(this._trades)
  }
}