import { TradeController } from './controllers/TradeController'

const controller = new TradeController()
$('.form').submit(controller.add.bind(controller))
$('#importButton').click(controller.importData.bind(controller))