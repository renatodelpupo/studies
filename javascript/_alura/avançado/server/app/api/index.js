let api = {}

const currentDate = new Date()
const previousDate = new Date()
previousDate.setDate(currentDate.getDate() - 7)

const oldDate = new Date()
oldDate.setDate(currentDate.getDate() - 14)

const negotations = [
  { data: currentDate, quantity: 1, value: 150 },
  { data: currentDate, quantity: 2, value: 250 },
  { data: currentDate, quantity: 3, value: 350 },
  { data: previousDate, quantity: 1, value: 450 },
  { data: previousDate, quantity: 2, value: 550 },
  { data: previousDate, quantity: 3, value: 650 },
  { data: oldDate, quantity: 1, value: 750 },
  { data: oldDate, quantity: 2, value: 950 },
  { data: oldDate, quantity: 3, value: 950 }
]

api.weekList = (req, res) => {
  const currentNegotiations = negotations.filter(negotiation => negotiation.data > previousDate)
  res.json(currentNegotiations)
}

api.previousList = (req, res) => {
  const previousNegotiations = negotations.filter(negotiation => negotiation.data < currentDate && negotiation.data > oldDate)
  setTimeout(() => res.json(previousNegotiations), 500)
}

api.oldList = (req, res) => {
  const oldNegotiations = negotations.filter(negotiation => negotiation.data < previousDate)
  res.json(oldNegotiations)
}

api.addNegotiation = (req, res) => {
  console.log(req.body)
  req.body.data = new Date(req.body.data.replace(/-/g, '/'))
  negotations.push(req.body)
  res.status(200).json("Trade received")
}

module.exports = api