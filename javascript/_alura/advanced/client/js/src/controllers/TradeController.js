import { ConnectionFactory } from '../services/ConnectionFactory'
import { TradeDao } from '../DAO/TradeDao'
import { TradeList } from '../models/TradeList'
import { Message } from '../models/Message'
import { TradeView } from '../view/TradeView'
import { MessageView } from '../view/MessageView'
import { TradeService } from '../services/TradeService'
import { DateHelper } from '../helpers/DateHelper'
import { Bind } from '../helpers/Bind'

class TradeController {

  constructor() {
    const $ = document.querySelector.bind(document)

    this._currentOrder = ''
    this._inputAmount = $('#amount')
    this._inputDate = $('#date')
    this._inputPrice = $('#price')

    this._tradeList = new Bind(
      new TradeList(),
      new TradeView($('#trade-view')),
      'add', '_erase', 'order', 'orderRevert'
    )

    this._message = new Bind(
      new Message(),
      new MessageView($('#message-view')),
      'text'
    )

    this._service = new TradeService()
    this._init()
  }

  add(event) {
    event.preventDefault()

    let trade = this._createTrade()

    new TradeService()
      .add(trade)
      .then(message => {
        this._tradeList.add(trade)
        this._message.text = message
        this._cleanForm()
      }).catch(error => this._message.text = error)
  }

  _cleanForm() {
    this._inputAmount.value = 1
    this._inputDate.value = ''
    this._inputPrice.value = 0
    this._inputDate.focus()
  }

  _cleanTable() {
    ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.eraseAll())
      .then(message => {
        this._message.text = message
        this._tradeList._erase()
      })
  }

  _cleanTable() {
    new TradeService()
      .clean()
      .then(message => {
        this._message.text = message
        this._tradeList._erase()
      })
      .catch(error => this._message.text = error)
  }

  _createTrade() {
    return new Trade(
      Number(this._inputAmount.value),
      DateHelper.stringToDate(this._inputDate.value),
      Number(this._inputPrice.value)
    )
  }

  importTrades() {
    this._service
      .import(this._tradeList.trades)
      .then(trades => trades.forEach(trade => {
        this._tradeList.add(trade)
        this._message.text = 'Trades successfully imported'
      }))
      .catch(error => this._message.text = error)
  }

  _init() {
    this._service
      .list()
      .then(trades =>
        trades.forEach(trade =>
          this._tradeList.add(trade)))
      .catch(error => {
        console.log(error)
        this._message.text = error
      })

    setInterval(() => {
      this.importTrades()
    }, 3000)

    ConnectionFactory
      .getConnection()
      .then(connection => new TradeDao(connection))
      .then(dao => dao.listAll())
      .then(trades => trades.forEach(trade => this._tradeList.add(trade)))
      .catch(error => {
        console.log(error)
        this._message.text = error
      })

    setInterval(() => {
      this.importTrades()
    }, 3000)
  }

  order(column) {

    if (this._currentOrder == column) {
      this._tradeList.orderRevert()
    } else {
      this._tradeList.order((a, b) => a[column] - b[column])
    }

    this._currentOrder = column
  }
}

const tradeController = new TradeController()

export function currentInstance() {
  return tradeController
}