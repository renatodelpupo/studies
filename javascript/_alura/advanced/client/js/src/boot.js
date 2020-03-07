import { currentInstance } from './controllers/TradeController'
import { } from './polyfill/fetch'

const tradeController = currentInstance()

document.querySelector('.form').onsubmit = tradeController.add.bind(tradeController)
document.querySelector('.buttonErase').onclick = tradeController._cleanTable.bind(tradeController)