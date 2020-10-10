// code
let Pokemons = {
  amount() {},

  say(str) {
    console.log('Your Pokedex says: ', str)
  }
}

function howsMyCollection() {
  const size = Pokemons.amount()
  if (size === undefined) return Pokemons.say('Ooops, not sure how many you have')
  if (size < 10) return Pokemons.say('You only have a few, you need more')
  if (size < 50) return Pokemons.say('You have quite some favorites. Keep going')
  return Pokemons.say('You are quite a collector')
}

const originalAmount = Pokemons.amount

// test
function stubAmount(amount) {
  Pokemons.amount = () => amount
}

function havePokemons(amount) {
  stubAmount(amount)
  howsMyCollection()
}

havePokemons(5) // -- You only have a few, you need more
havePokemons(17) // -- You have quite some favorites. Keep going
havePokemons(100) // -- You are quite a collector
