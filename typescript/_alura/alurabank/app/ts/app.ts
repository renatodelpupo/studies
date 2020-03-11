import { TradeController } from './controllers/TradeController'

const controller = new TradeController()
$('.form').addEventListener('submit', controller.add.bind(controller))