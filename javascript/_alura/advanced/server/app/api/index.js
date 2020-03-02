let api = {}

const currentDate = new Date()
const previousDate = new Date()
previousDate.setDate(currentDate.getDate() - 7)

const oldDate = new Date()
oldDate.setDate(currentDate.getDate() - 14)

const trades = [
  { date: currentDate, amount: 1, price: 150 },
  { date: currentDate, amount: 2, price: 250 },
  { date: currentDate, amount: 3, price: 350 },
  { date: previousDate, amount: 1, price: 450 },
  { date: previousDate, amount: 2, price: 550 },
  { date: previousDate, amount: 3, price: 650 },
  { date: oldDate, amount: 1, price: 750 },
  { date: oldDate, amount: 2, price: 950 },
  { date: oldDate, amount: 3, price: 950 }
]

api.weekList = (req, res) => {
  const currentTrades = trades.filter(trade => trade.date > previousDate)
  res.json(currentTrades)
}

api.previousList = (req, res) => {
  const previousTrades = trades.filter(trade => trade.date < currentDate && trade.date > oldDate)
  setTimeout(() => res.json(previousTrades), 500)
}

api.oldList = (req, res) => {
  const oldTrades = trades.filter(trade => trade.date < previousDate)
  res.json(oldTrades)
}

api.addTrade = (req, res) => {
  console.log(req.body)
  req.body.date = new Date(req.body.date.replace(/-/g, '/'))
  trades.push(req.body)
  res.status(200).json("Trade received")
}

module.exports = api