let api = {}

api.data = function (req, res) {

  res.json([
    { value: 200.5, multiplier: 2 },
    { value: 100.2, multiplier: 5 },
    { value: 50.5, multiplier: 1 },
    { value: 70.5, multiplier: 2 }
  ])
}

module.exports = api