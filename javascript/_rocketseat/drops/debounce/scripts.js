// mayk brito gist
// https://gist.github.com/maykbrito/50bb202deb977ec51a89efb00a9774f5

// const filterUsers = async (name) =>
//   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
//     .then(res => res.json())

// const debounceEvent = (fn, wait = 1000, time) => (...args) =>
//   clearTimeout(time, time = setTimeout(() => fn(...args), wait))

// function handleKeyUp(event) {
//   filterUsers(event.target.value)
//     .then(users => console.log(users.map(user => user.name)))
// }

// document.querySelector("input")
//   .addEventListener("keyup", debounceEvent(handleKeyUp, 500))


// tests

// Getting API users filtered by name
const getUsers = name => {
  if (!name) return

  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(response => response.json())
    .then(result => console.table(result.map(item => item.name)))
}

// Debounce generic function
let strikes = []
const debounce = (fn, ...args) => {
  if (typeof(fn) !== 'function') return

  clearTimeout(strikes[fn], strikes[fn] = setTimeout(() => fn(...args), 2000))
}

// Handle key up generic function
const handleKeyUp = (element, fn) => {
  document.querySelector(element)
    .addEventListener('keyup', evt => debounce(fn, evt.target.value))
}

// Register get users' function when input key up
handleKeyUp('input', getUsers)
