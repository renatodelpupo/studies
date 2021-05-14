const exec = (fn, ...params) => fn(...params)

const sum = (a, b) => {
  console.log(a + b)
}

const subtract = (a, b) => {
  console.log(a - b)
}

exec(sum, 13, 22)
exec(subtract, 22, 13)
