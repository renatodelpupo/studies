class TradeService {

  importWeeklyTrades(callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'trades/week')

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const responseText = JSON.parse(xhr.responseText)
          const trades = responseText.map(object => new Trade(object.amount, new Date(object.date), object.price))
          callback(null, trades)
        } else {
          console.log(xhr.responseText)
          callback('Trades import failed', null)
        }
      }
    }

    xhr.send()
  }
}